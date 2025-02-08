// import React from 'react';

const Header = () => {
    return ( 
        <header className="header flex-grow-0 bg-opacity-30 backdrop-blur-xs px-20 py-4 grid grid-cols-[auto_auto_auto] items-center gap-4 text-white sticky top-0 z-50" style={{ background: 'linear-gradient(to right, black, transparent, black)' }}>
            <div className="logo"> <h1>Header Component</h1></div>
            <nav className="nav display block">
                <ul className="nav flex flex-row space-x-6 ml-10">
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