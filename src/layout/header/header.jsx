import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for open/close

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header flex-grow-0 bg-opacity-30 backdrop-blur-xs px-6 md:px-20 py-4 flex items-center justify-between text-white sticky top-0 z-50"
      style={{ background: 'linear-gradient(to right, black, transparent, black)' }}>
      
      {/* Logo - Clickable on large screens */}
      <div className="logo">
        <Link to="/pf/" className="hidden md:block">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 border-white bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg cursor-pointer">
            <span className="text-white font-bold text-lg md:text-2xl">AM</span>
          </div>
        </Link>

        {/* Small screen menu button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Navigation (hidden on small screens, shown on large screens) */}
      <nav className="hidden md:block">
        <ul className="flex flex-row space-x-6 ml-10">
          <li><Link to="/pf/" className="hover:underline">Home</Link></li>
          <li><Link to="/pf/portfolio" className="hover:underline">Portfolio</Link></li>
          <li><Link to="/pf/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>

      {/* Call to Action - Hire Me Button */}
      <div className="hidden md:block">
        <a href="https://www.fiverr.com/sellers/anthonymwai/edit" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#AC4746] text-white font-bold px-4 py-2 rounded-md">
            Hire Me
          </button>
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col items-center space-y-4 md:hidden">
          <Link to="/pf/" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/pf/portfolio" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          <Link to="/pf/contact" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <a href="https://www.fiverr.com/sellers/anthonymwai/edit" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#AC4746] text-white font-bold px-4 py-2 rounded-md">
              Hire Me
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
