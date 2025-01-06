import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Chat from './pages/Chat';
import Solana from './components/chat/Solana';
import AiPaymentAgent from './components/chat/AiPaymentAgent';
import Educational from './components/chat/Educational';
import Researcher from './components/chat/Researcher';
import Stake from './components/chat/Stake';
import Copy from './components/chat/Copy';
import Lp from './components/chat/Lp';
import Home from './components/chat/Home';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<Chat />}>
          <Route path="" element={<Home />} />
          <Route path="solana" element={<Solana />} />
          <Route path="lp" element={<Lp />} />
          <Route path="copy" element={<Copy />} />
          <Route path="stake" element={<Stake />} />
          <Route path="researcher" element={<Researcher />} />
          <Route path="educational" element={<Educational />} />
          <Route path="payment" element={<AiPaymentAgent />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
