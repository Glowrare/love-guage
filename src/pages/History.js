import A11yDialog from 'a11y-dialog';
import { useContext, useEffect, useRef, useState } from 'react';
import Dialog from '../components/dialog/Dialog';
import Guage from '../components/effects/Guage';
// import Overlay from '../components/effects/Overlay';
// import Spinner from '../components/effects/Spinner';
import FlexWrap from '../components/ui/FlexWrap';
import HistoryCard from '../components/history/HistoryCard';
import HistoryContext from '../store/history-context';
import HistoryTable from '../components/history/HistoryTable';
import HistoryAction from '../components/history/HistoryAction';

const HistoryPage = () => {
  const { history, totalHistory } = useContext(HistoryContext);

  const dialogContainer = useRef();

  const [guageVal, setGuageVal] = useState(0);
  const [message, setMessage] = useState('');
  const [tableView, setTableView] = useState(false);
  const [viewType, setViewType] = useState('grid');
  const [csvData, setCsvdata] = useState(history);

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

  const toggleViewHandler = (showasTable) => {
    if (showasTable) {
      setTableView(true);
      setViewType('table');
    } else {
      setTableView(false);
      setViewType('grid');
    }
  };

  useEffect(() => {
    setCsvdata(history);
  }, [history]);

  return (
    <div>
      <HistoryAction
        toggleView={toggleViewHandler}
        viewType={viewType}
        csvData={csvData}
        csvHeaders={csvHeaders}
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
          'No data to show'
        )}
        {/* <HistoryTable history={history} clickHandler={clickHandler} /> */}
      </FlexWrap>
      {/* {totalHistory < 1 && 'No data to show'} */}
      <Dialog dialogContainer={dialogContainer} message={message}>
        <Guage val={guageVal} />
      </Dialog>
    </div>
  );
};

export default HistoryPage;
