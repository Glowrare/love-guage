import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import { HistoryContextProvider } from './store/history-context';

ReactDOM.render(
  <HistoryContextProvider>
    <Router>
      <App />
    </Router>
  </HistoryContextProvider>,
  document.getElementById('root')
);
