import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Chat = () => {
  return (
    <div className="flex">
      <aside className="text-white flex flex-col mr-6">
        SIDEBAAR
        <NavLink to="solana" className="text-white">
          Solana
        </NavLink>
        <NavLink to="payment" className="text-white">
          Payment
        </NavLink>
      </aside>
      <Outlet />
    </div>
  );
};

export default Chat;
