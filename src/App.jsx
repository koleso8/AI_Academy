import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Chat from './components/Chat';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Layout>
  );
};

export default App;
