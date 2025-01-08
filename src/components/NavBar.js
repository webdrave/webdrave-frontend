"use client";

import React, { useState } from "react";
import Logo from "./Logo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigations = [
    { name: "Home", to: "" },
    { name: "Portfolio", to: "" },
    { name: "Our Team", to: "" },
    { name: "Contact Us", to: "" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false); // Close menu after clicking a navigation item
  };

  return (
    <nav className="fixed top-[5%] left-1/2 -translate-x-1/2 border border-[#2d2d2d] rounded-2xl py-4 flex flex-col sm:flex-row shadow-[0_0_20px_10px_rgba(28,28,28,0.25)] backdrop-blur-sm w-[90%] sm:w-auto z-50 animate-fadeIn sm:animate-slideDown">
      <div className="flex justify-between items-center px-6">
        <Logo className="sm:border-r sm:border-[#2d2d2d] sm:pr-6" />
        
        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden text-light transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-rotate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-rotate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <ul className={`${
        isMenuOpen ? 'flex animate-slideDown' : 'hidden'
      } sm:flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-16 px-6 sm:px-12 py-4 sm:py-0 mt-4 sm:mt-0 border-t sm:border-t-0 border-[#2d2d2d]`}>
        {navigations.map(({ name, to }, idx) => {
          return (
            <a
              className={`text-xs text-[#dbdbdb] hover:text-primary transition-all duration-300 hover:scale-110 ${
                name === "Contact Us" ? "text-primary" : ""
              } animate-fadeIn`}
              style={{ animationDelay: `${idx * 100}ms` }}
              href={to}
              key={idx}
              onClick={handleNavClick}
            >
              {name}
            </a>
          );
        })}
      </ul>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[-1] sm:hidden animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default NavBar;
