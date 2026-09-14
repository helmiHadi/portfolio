import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated to match all the sections we've built!
  const navLinks = [
    { id: 1, text: 'About', url: '#about' },
    { id: 2, text: 'Skills', url: '#skills' },
    { id: 3, text: 'Projects', url: '#projects' },
    { id: 4, text: 'Experience', url: '#experience' },
    { id: 5, text: 'Contact', url: '#contact' },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-50">
          
          {/* Logo Area */}
          <div className="flex items-center cursor-pointer">
            <span className="font-extrabold text-xl tracking-tight text-black">
              <span className="font-medium text-neutral-400 mr-1">&lt;/&gt;</span>
              Helmi H.W.
            </span>
          </div>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.url} 
                  className="text-sm font-bold text-black hover:text-neutral-600 transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="#cv" 
              className="px-6 py-2.5 rounded-full border-2 border-black text-sm font-bold text-black hover:bg-black hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1"
            >
              Download CV
            </a>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button 
            className="md:hidden p-2 text-black hover:text-neutral-600 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-md w-full h-screen">
          {/* Header (Inside Menu) */}
          <div className="px-6 py-4 flex justify-between items-center">
            {/* Logo Area */}
            <div className="flex items-center cursor-pointer">
              <span className="font-extrabold text-xl tracking-tight text-black">
                <span className="font-medium text-neutral-400 mr-1">&lt;/&gt;</span>
                Helmi H.W.
              </span>
            </div>
            
            {/* Close Button */}
            <button 
              className="p-2 text-black hover:text-neutral-600 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links (Centered) */}
          <div className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl font-bold">
            <ul className="flex flex-col gap-8 text-center items-center">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.url} 
                    className="text-black hover:text-neutral-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#cv" 
              className="px-6 py-2.5 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 mt-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;