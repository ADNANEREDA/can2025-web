
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isActive = (path) => {
    return location.pathname === path ? "text-maroc-red" : "text-white hover:text-maroc-red";
  };


  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/news', label: 'News' },
    { path: '/teams', label: 'Teams' },
    { path: '/stadiums', label: 'Stadiums' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/shop', label: 'Fan Shop' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-maroc-red/30 h-20 flex items-center justify-between px-6 md:px-8 transition-all duration-300">
      
      
      <div className="shrink-0">
        <Link to="/">
          
          <img src="/src/assets/images/Logo1.jpg" alt="AFCON 2025 Logo" className="h-12 w-auto" />
        </Link>
      </div>

     
      <div className="hidden md:flex items-center justify-center gap-8 font-bold uppercase text-sm tracking-wider">
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={`transition-colors duration-300 ${isActive(link.path)}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      
      <div className="hidden md:flex items-center shrink-0">
        <Link 
          to="/tickets" 
          className="bg-maroc-red text-white font-bold uppercase text-sm px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-maroc-red/50"
        >
          Tickets
        </Link>
      </div>

      
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-maroc-red/30 flex flex-col items-center py-8 gap-6 animate-fade-in-down shadow-xl z-40">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`font-bold uppercase text-lg tracking-wider ${isActive(link.path)}`}
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              {link.label}
            </Link>
          ))}
          
           <Link 
            to="/tickets" 
            className="bg-maroc-red text-white font-bold uppercase text-sm px-8 py-3 rounded-full hover:bg-red-700 transition-all mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tickets
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;