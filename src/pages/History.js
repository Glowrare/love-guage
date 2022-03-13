import { useContext, useState } from 'react';
// import Overlay from '../components/effects/Overlay';
// import Spinner from '../components/effects/Spinner';
import FlexWrap from '../components/ui/FlexWrap';
import HistoryCard from '../components/ui/HistoryCard';
import HistoryContext from '../store/history-context';

const HistoryPage = () => {
  // const [loading, setLoading] = useState(false);

  const { history, totalHistory } = useContext(HistoryContext);

  return (
    <div>
      <FlexWrap wrap='wrap' gap='20px'>
        {totalHistory >= 1 &&
          history.map((item) => {
            return (
              <HistoryCard
                yourName={item.yourName}
                theirName={item.theirName}
                key={item.id}
                id={item.id}
                gap='20px'
              />
            );
          })}
      </FlexWrap>
      {totalHistory < 1 && 'No data to show'}
    </div>
  );
};

export default HistoryPage;
