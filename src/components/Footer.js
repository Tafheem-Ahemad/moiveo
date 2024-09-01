import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-neutral-800 text-neutral-400 py-4'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          {/* Left Section: Navigation Links */}
          <div className='mb-4 md:mb-0'>
            <Link to="/" className='mx-2 hover:text-white transition-colors duration-200'>About</Link>
            <Link to="/" className='mx-2 hover:text-white transition-colors duration-200'>Contact</Link>
            <Link to="/" className='mx-2 hover:text-white transition-colors duration-200'>Privacy Policy</Link>
            <Link to="/" className='mx-2 hover:text-white transition-colors duration-200'>Terms of Service</Link>
          </div>

          {/* Center Section: Social Media Links */}
          <div className='mb-4 md:mb-0 text-3xl flex flex-row justify-between'>
            <Link to="//www.instagram.com" target="_blank" rel="noopener noreferrer" className='mx-2 hover:text-white transition-colors duration-200'>
              <FaInstagram />
            </Link>
            <Link to="https://www.linkedin.com/in/tafheem-ahemad/" target="_blank" rel="noopener noreferrer" className='mx-2 hover:text-white transition-colors duration-200'>
              <FaLinkedinIn />
            </Link>
          </div>

          {/* Right Section: Credits */}
          <div className='text-center md:text-right'>
            <p className='text-sm mb-1'>Created by Tafheem Ahemad</p>
            <p className='text-xs'>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
