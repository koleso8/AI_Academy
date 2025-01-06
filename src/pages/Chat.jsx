import { NavLink, Outlet } from 'react-router-dom';
import Home from '../components/chat/Home';

const Chat = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <aside className="text-white flex flex-col w-80  h-full bg-gradient-to-r from-blue-400 to-purple-600 pt-4">
        <nav className="flex flex-col  navigationChat h-full">
          <NavLink to="/" className="text-black  px-4 text-lg mb-8">
            Back to site
          </NavLink>
          <NavLink to="/chat" className="text-black  px-4 text-lg mb-5">
            Home
          </NavLink>
          <NavLink to="solana" className="text-black  px-4 text-lg ">
            <span>Solana Money Sender</span>
          </NavLink>
          <NavLink to="lp" className="text-black  px-4 text-lg">
            <span>LP Specialist</span>
          </NavLink>
          <NavLink to="copy" className="text-black  px-4 text-lg ">
            <span>Copy Trading</span>
          </NavLink>
          <NavLink to="stake" className="text-black px-4 text-lg">
            <span>Solana Stake</span>
          </NavLink>
          <NavLink to="researcher" className="text-black  px-4 text-lg">
            <span>Researcher Agent</span>
          </NavLink>
          <NavLink to="educational" className="text-black  px-4 text-lg ">
            <span>Educational Agent</span>
          </NavLink>
          <NavLink to="payment" className="text-black px-4 text-lg">
            <span>AI Payment Agent</span>
          </NavLink>
        </nav>
      </aside>
      <div className="flex flex-col justify-between  w-full h-full p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Chat;
