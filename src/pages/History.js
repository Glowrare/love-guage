import A11yDialog from 'a11y-dialog';
import { useContext, useEffect, useRef, useState } from 'react';
import Dialog from '../components/dialog/Dialog';
import Guage from '../components/effects/Guage';
import FlexWrap from '../components/ui/FlexWrap';
import HistoryCard from '../components/history/HistoryCard';
import HistoryContext from '../store/history-context';
import HistoryTable from '../components/history/HistoryTable';
import HistoryAction from '../components/history/HistoryAction';
import TextBlock from '../components/ui/TextBlock';

const HistoryPage = () => {
  const { history, totalHistory, deleteItems } = useContext(HistoryContext);

  const dialogContainer = useRef();

  const [guageVal, setGuageVal] = useState(0);
  const [message, setMessage] = useState('');
  const [tableView, setTableView] = useState(false);
  const [viewType, setViewType] = useState('grid');
  const [csvData, setCsvdata] = useState(history);
  const [emptyList, setEmptyList] = useState(true);

  const csvHeaders = [
    { label: 'Your Name', key: 'yourName' },
    { label: 'Their Name', key: 'theirName' },
    { label: 'Love Guage (%)', key: 'guageMeter' },
    { label: 'Message', key: 'message' },
  ];

  const clickHandler = (id) => {
    const dialog = new A11yDialog(dialogContainer.current);
    dialog.show();
    const clickedItem = history.find((item) => item.id === id);
    setGuageVal(parseInt(clickedItem.guageMeter));
    setMessage(clickedItem.message);
  };

  const deleteHandler = () => {
    const confirmation =
      'You are about to delete the entire list. This action CANNOT be reversed. Proceed?';
    if (totalHistory < 1) {
      window.alert('Nothing to delete');
    } else if (window.confirm(confirmation) && totalHistory >= 1) {
      deleteItems();
      localStorage.setItem('history', []);
    } else return;
  };

  const toggleViewHandler = (showAsTable) => {
    if (showAsTable) {
      setTableView(true);
      setViewType('table');
    } else {
      setTableView(false);
      setViewType('grid');
    }
  };

  useEffect(() => {
    setCsvdata(history);
    if (totalHistory >= 1) {
      setEmptyList(false);
    } else {
      setEmptyList(true);
    }
  }, [history, totalHistory]);

  return (
    <div>
      <HistoryAction
        toggleView={toggleViewHandler}
        viewType={viewType}
        csvData={csvData}
        csvHeaders={csvHeaders}
        deleteHandler={deleteHandler}
        emptyList={emptyList}
      />
      <FlexWrap wrap='wrap' gap='20px'>
        {totalHistory >= 1 ? (
          !tableView ? (
            history.map((item) => {
              return (
                <HistoryCard
                  yourName={item.yourName}
                  theirName={item.theirName}
                  key={item.id}
                  id={item.id}
                  gap='20px'
                  clickHandler={() => clickHandler(item.id)}
                />
              );
            })
          ) : (
            <HistoryTable history={history} clickHandler={clickHandler} />
          )
        ) : (
          <TextBlock header='No data to show' />
        )}
      </FlexWrap>
      <Dialog dialogContainer={dialogContainer} message={message}>
        <Guage val={guageVal} />
      </Dialog>
    </div>
  );
};

export default HistoryPage;
