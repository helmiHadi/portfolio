import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-accent-lime selection:text-neutral-900">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
