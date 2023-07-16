import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <BiHomeAlt2 className="text-white text-3xl" />
              <span className="ml-1 text-white text-2xl">Learniverse</span>
              <img
              src="https://i.gifer.com/yy3.gif"
              alt="logo"
              className="w-40 z-0 ml-2"
            />
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <NavLink
                exact
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                activeClassName="bg-gray-900"
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                activeClassName="bg-gray-900"
              >
                About
              </NavLink>
              <NavLink
                exact
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                activeClassName="bg-gray-900"
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="flex space-x-4">
            <NavLink
              exact
              to="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              activeClassName="bg-gray-900"
            >
              Login
            </NavLink>
            <NavLink
              exact
              to="/signup"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              activeClassName="bg-gray-900"
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
