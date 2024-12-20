import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    alert('Logout Successful'); // Show alert on logout
  };

  return (
    <div className="bg-gray-900 sticky top-0 z-40 py-5 shadow-md">
      <div className="w-11/12 md:w-4/5 m-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl font-bold text-yellow-500 hover:text-yellow-600 transition-colors duration-300">
            AutoHaven
          </h1>
        </Link>
        <ul className="hidden md:flex space-x-5 text-sm font-semibold text-white">
          <Link to="/">
            <li className="px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer">
              HOME
            </li>
          </Link>
          <Link to="/cars">
            <li className="px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer">
              CARS
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer">
              CONTACT
            </li>
          </Link>
          <Link to="/help">
            <li className="px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer">
              HELP
            </li>
          </Link>
        </ul>
        <div className="flex items-center space-x-5">
          {user ? (
            <div className="flex items-center space-x-4">
            {/* Icon and Username */}
            <div className="flex flex-col items-center space-y-1">
              <FaUserCircle size={32} className="text-yellow-500" />
              <p className="text-sm font-bold text-white">{user.username}</p>
            </div>
          
            {/* Logout Button */}
            <button
              onClick={logout}
              className="px-4 py-2 text-yellow-500 font-semibold border border-yellow-500 rounded-md hover:text-black hover:bg-yellow-500 transition-all duration-300"
            >
              Logout
            </button>
          </div>          
          ) : (
            <>
              <Link to="/register">
                <button className="px-5 py-2 text-yellow-500 font-semibold hover:text-black hover:bg-yellow-500 border border-yellow-500 rounded-md transition-all duration-300">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="px-5 py-2 border border-yellow-500 rounded-md text-yellow-500 font-semibold hover:text-black hover:bg-yellow-500 transition-all duration-300">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
