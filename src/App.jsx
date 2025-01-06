import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Chat from './components/Chat';
import Solana from './components/Solana';
import AiPaymentAgent from './components/AiPaymentAgent';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<Chat />}>
          <Route path="solana" element={<Solana />} />
          <Route path="payment" element={<AiPaymentAgent />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
