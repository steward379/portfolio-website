'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/portfolio-website/logo.jpg" 
              alt="Logo" 
              width={40} 
              height={40}
              className="rounded"
              loading="lazy"
            />
            <div>
              <div className="text-2xl font-bold text-gray-900">縮小檢視工作室</div>
              {/* <div className="text-xs text-gray-500"></div> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
            <Navigation className="hidden md:block" />
            <a
              href="https://www.facebook.com/ZoomOutDesign"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Navigation />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;