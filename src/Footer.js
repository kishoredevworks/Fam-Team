import React from 'react';


const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-10">
      <div className="container mx-auto px-6">
        {/* Glassmorphism Box with glowing shadow */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 border border-white border-opacity-20 relative glassmorphism-card">
          {/* Glowing Outer Shadow */}
          <div className="absolute inset-0 w-full h-full rounded-lg pointer-events-none glow-shadow"></div>

          {/* Brand Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-white mb-2">Fam-team</h3>
            <p className="text-gray-200">An IT startup powered by family, founded by Mr. RAJARATINEM.</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-white text-lg font-semibold">
            <li><a href="/" className="hover:text-pink-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-pink-300 transition">About</a></li>
            <li><a href="/projects" className="hover:text-pink-300 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-pink-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-pink-300 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6.27a9.75 9.75 0 01-2.89.82 5.15 5.15 0 002.2-2.85 10.07 10.07 0 01-3.27 1.27 5.1 5.1 0 00-8.66 4.65 14.49 14.49 0 01-10.51-5.33 5.12 5.12 0 001.6 6.82 4.93 4.93 0 01-2.31-.65v.06a5.12 5.12 0 004.1 5.03 5.09 5.09 0 01-2.3.09 5.11 5.11 0 004.78 3.54A10.2 10.2 0 010 19.46 14.42 14.42 0 007.84 22c9.41 0 14.56-8.09 14.56-15.11v-.68A10.44 10.44 0 0024 4.8a9.93 9.93 0 01-2.89.79z"></path></svg>
          </a>
          <a href="#" className="text-white hover:text-pink-300 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.634 5.32c-.835.37-1.732.62-2.675.735a4.692 4.692 0 002.05-2.59 9.34 9.34 0 01-2.965 1.14 4.673 4.673 0 00-7.957 4.257 13.288 13.288 0 01-9.64-4.88 4.675 4.675 0 001.448 6.25 4.648 4.648 0 01-2.12-.588v.06a4.675 4.675 0 003.748 4.577 4.693 4.693 0 01-2.116.08 4.675 4.675 0 004.364 3.243 9.365 9.365 0 01-6.91 1.93 13.236 13.236 0 007.162 2.1c8.59 0 13.29-7.117 13.29-13.29v-.61a9.482 9.482 0 002.305-2.418z"></path></svg>
          </a>
          <a href="#" className="text-white hover:text-pink-300 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 21.9a9.9 9.9 0 110-19.8 9.9 9.9 0 010 19.8zM16.53 8.37h-.07a1.59 1.59 0 01-.97-.37l-.34-.3A1.78 1.78 0 0114 6.68a1.78 1.78 0 01-.34 1.02l-.34.3a1.59 1.59 0 01-1.04.39h-.07a1.59 1.59 0 01-1.04-.39l-.34-.3A1.78 1.78 0 0110 6.68a1.78 1.78 0 01-.34 1.02l-.34.3a1.59 1.59 0 01-1.04.39h-.07a1.59 1.59 0 01-1.04-.39l-.34-.3a1.78 1.78 0 01-.34-1.02A1.78 1.78 0 014.9 7l-.34-.3a1.59 1.59 0 01-1.04-.37H3.53A8.28 8.28 0 0111.61 19.5 8.28 8.28 0 0119.5 11.62a8.34 8.34 0 01-2.97 2.68v.07h-.07a1.59 1.59 0 01-.97-.37z"></path></svg>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} FAM-TEAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
