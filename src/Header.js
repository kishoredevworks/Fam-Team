import React, { useState, useEffect } from 'react';

const NavLink = ({ href, children }) => (
  <a href={href} className="relative group">
    <span className="relative z-10">{children}</span>
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  </a>
);

const PremiumNavbarHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 text-white font-sans">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : ''}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold tracking-tighter">FAM-TEAM</a>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <NavLink key={item} href={`/${item.toLowerCase()}`}>{item}</NavLink>
              ))}
            </div>
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden text-2xl">
              {isNavOpen ? 'X' : '☰'}
            </button>
          </div>
        </div>
        {isNavOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`/${item.toLowerCase()}`} className="text-lg hover:text-pink-300 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <header className="container mx-auto px-4 pt-32 pb-16 text-center relative z-10">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
  We Are Team OF <br /> 
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-600 to-purple-600">
    Future Designers & Developers 
  </span>
  <div className="flex justify-end mb-8">
  <img
    src="images/Background.png"
    alt="Cityscape"
    className="w-full max-w-md h-auto mt-4 jump"
  />
</div>

  
</h1>

        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {showMore ? 'Read Less' : 'Read More'}
        </button>
        {showMore && (
          <div className="mt-8 text-lg max-w-2xl mx-auto overflow-hidden">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <p className="mb-4 text-white font-medium leading-relaxed">
                At FutureCraft, we blend cutting-edge design with innovative development to create digital experiences that push the boundaries of what's possible.
              </p>
              <p className="text-white font-medium leading-relaxed">
                Our team of visionaries, creators, and tech enthusiasts is dedicated to shaping the future of digital interaction, one pixel and one line of code at a time.
              </p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default PremiumNavbarHeader;