import { Link } from 'react-router-dom';


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
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><Link to="/" className="hover:text-pink-300 transition">Home</Link></li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><Link to="/about" className="hover:text-pink-300 transition">About</Link></li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><Link to="/projects" className="hover:text-pink-300 transition">Projects</Link></li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><Link to="/contact" className="hover:text-pink-300 transition">Contact</Link></li>
          </ul>

        </div>

        {/* Social Media Icons */}
                 {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="text-white hover:text-pink-300 transition">
            {/* SVG icon */}
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="text-white hover:text-pink-300 transition">
            {/* SVG icon */}
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="text-white hover:text-pink-300 transition">
            {/* SVG icon */}
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