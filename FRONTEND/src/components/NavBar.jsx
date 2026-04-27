import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate({ to: '/' });
  };

  return (
    <nav className="bg-black border border-b-gray-800">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-teal-400">
              URL Shortener
            </Link>
          </div>
          
          {/* Right side - Auth button */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-teal-500 hover:bg-teal-600 text-black px-4 py-2 rounded-md text-sm font-medium font-semibold transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth"
                className="bg-teal-500 hover:bg-teal-600 text-black px-4 py-2 rounded-md text-sm font-medium font-semibold"
              >
                Login / Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;