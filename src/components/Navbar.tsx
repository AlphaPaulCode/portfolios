import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl text-gray-800">MyPortfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#landing" className="hover:text-exotic">Home</a></li>
          <li><a href="#projects" className="hover:text-exotic">Projects</a></li>
          <li><a href="#about" className="hover:text-exotic">About</a></li>
          <li><a href="#contact" className="hover:text-exotic">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-95 px-4 pb-4 pt-2 shadow-md text-gray-800">
          <ul className="space-y-4 text-center font-medium">
            <li><a href="#landing" onClick={closeMenu} className="block hover:text-exotic">Home</a></li>
            <li><a href="#projects" onClick={closeMenu} className="block hover:text-exotic">Projects</a></li>
            <li><a href="#about" onClick={closeMenu} className="block hover:text-exotic">About</a></li>
            <li><a href="#contact" onClick={closeMenu} className="block hover:text-exotic">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;