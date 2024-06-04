import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="relative z-1 w-full bg-abir bg-opacity-80 shadow-sm py-6">
        <nav className="relative flex justify-center space-x-8 font-bold">
          {/* <div className="absolute inset-0 z-0 block w-full h-full opacity-50 shadow-md"></div> */}
              <Link
                to="/"
                className="text-gray-700 hover:text-green-600 font-sayan-font"
              >
                Home
              </Link>
              <Link
                to="/know"
                className="text-gray-700 hover:text-green-600 font-sayan-font"
              >
                About
              </Link>
              <Link
                to="/blog1"
                className="text-gray-700 hover:text-green-600 font-sayan-font"
              >
                Blog
              </Link>
          </nav>
        
      </header>
    </>
  );
}

export default Header;
