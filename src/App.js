import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';
import HistoryPage from './pages/History';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
