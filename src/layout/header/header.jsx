

const Header = () => {
    return ( 
        <header className="header flex-grow-0 bg-opacity-30 backdrop-blur-xs px-20 py-4 grid grid-cols-[auto_auto_auto] items-center gap-4 text-white sticky top-0 z-50" style={{ background: 'linear-gradient(to right, black, transparent, black)' }}>
              {/* Logo with circular initials */}
      <div className="logo">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 border-white bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg">
          <span className="text-white font-bold text-lg md:text-2xl">AM</span>
        </div>
      </div>
               {/* Navigation (hidden on small screens) */}
      <nav className="nav block">
        <ul className="hidden md:flex flex-row space-x-6 ml-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
            <div className="callToAction">
            <button className=" bg-[#AC4746] text-white font-bold px-4 py-2 rounded-md">
             Hire Me
     </button>
</div>
        </header>
    );
};

export default Header;