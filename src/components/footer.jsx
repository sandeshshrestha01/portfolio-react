import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer 
    id ="footer"
    className="bg-[#f5f5f5] text-black text-center py-5 shadow-sm">
      <p className="text-[15px] font-medium">
        &copy; {year} Sandesh Shrestha | Design
        <FaHeart className="inline text-red-500 mx-1" aria-hidden="true" />
        by{' '}
        <a
          href="https://colorlib.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#383838] hover:text-[#04f8c3] transition-colors"
        >
          Sandesh
        </a>{' '}
        - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
