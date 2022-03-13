import { createContext, useState } from 'react';

const HistoryContext = createContext({
  history: [],
  totalHistory: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
  deleteItems: () => {},
});

const HistoryContextProvider = (props) => {
  // const [userHistory, setUserHistory] = useState([]);
  const [userHistory, setUserHistory] = useState(() => {
    const savedHistory = localStorage.getItem('history');
    const historyList = JSON.parse(savedHistory);
    return historyList || [];
  });

  const addItemHandler = (item) => {
    setUserHistory((prevUserHistory) => {
      return prevUserHistory.concat(item);
    });
  };
  const deleteItemHandler = (id) => {
    setUserHistory((prevUserHistory) => {
      return prevUserHistory.filter((item) => item.id !== id);
    });
  };
  const deleteItemsHandler = () => {
    return setUserHistory([]);
  };

  const context = {
    history: userHistory,
    totalHistory: userHistory.length,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
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
