import React from 'react';
import Navbar from './Navbar'; // Import Navbar
import Footer from './Footer'; // Import Footer

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* My navbar */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer /> {/* My Footer */}
    </div>
  );
};

export default Layout;
