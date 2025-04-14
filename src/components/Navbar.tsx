import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-20 bg-white bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl text-gray-800">MyPortfolio</div>
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#landing" className="hover:text-exotic">Home</a></li>
          <li><a href="#projects" className="hover:text-exotic">Projects</a></li>
          <li><a href="#about" className="hover:text-exotic">About</a></li>
          <li><a href="#contact" className="hover:text-exotic">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
