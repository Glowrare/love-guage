import { createContext, useState } from 'react';

const HistoryContext = createContext({
  history: [],
  totalHistory: 0,
  addItem: (item) => {},
  deleteItems: () => {},
});

const HistoryContextProvider = (props) => {
  const [userHistory, setUserHistory] = useState(() => {
    const savedHistory = localStorage.getItem('history');
    if (savedHistory) {
      const historyList = JSON.parse(savedHistory);
      return historyList;
    } else return [];
  });

  const addItemHandler = (item) => {
    setUserHistory((prevUserHistory) => {
      return prevUserHistory.concat(item);
    });
  };
  const deleteItemsHandler = () => {
    return setUserHistory([]);
  };

  const context = {
    history: userHistory,
    totalHistory: userHistory.length,
    addItem: addItemHandler,
    deleteItems: deleteItemsHandler,
  };

  return (
    <HistoryContext.Provider value={context}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
export { HistoryContextProvider };
