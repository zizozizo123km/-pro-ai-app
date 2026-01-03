import React, { useState, useEffect, useCallback } from 'react';
import { Search, Bell, Menu, X, UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'TV Shows', path: '/tv' },
  { name: 'Movies', path: '/movies' },
  { name: 'New & Popular', path: '/latest' },
  { name: 'My List', path: '/list' },
  { name: 'Browse by Language', path: '/language' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleSearchClick = () => {
    // Navigate to a dedicated search page or trigger an inline search overlay
    navigate('/search');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo and Primary Nav (Desktop) */}
          <div className="flex items-center space-x-8">
            {/* Logo - Placeholder for a N*tflix style logo */}
            <Link to="/" className="text-red-600 text-3xl font-black tracking-wider hover:text-red-500 transition duration-150">
              NETFLIX
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white text-sm font-medium hover:text-gray-300 transition duration-150"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            
            {/* Search Icon */}
            <button
              onClick={handleSearchClick}
              className="text-white hover:text-gray-300 transition duration-150 p-1"
              aria-label="Search"
            >
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Notification Icon (Hidden on small screens for simplicity) */}
            <button
              className="hidden sm:block text-white hover:text-gray-300 transition duration-150 p-1"
              aria-label="Notifications"
            >
              <Bell className="h-6 w-6" />
            </button>
            
            {/* Profile Avatar/Menu */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center space-x-2">
                <UserCircle className="h-8 w-8 text-white rounded-full bg-gray-700/50 hover:bg-gray-600 transition duration-150" />
              </div>
              
              {/* Profile Dropdown (Placeholder) */}
              <div className="absolute right-0 mt-3 w-48 bg-black border border-gray-700 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition duration-200 transform scale-95 group-hover:scale-100 origin-top-right pointer-events-none group-hover:pointer-events-auto">
                <div className="py-1">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Manage Profiles
                  </Link>
                  <Link to="/account" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Account
                  </Link>
                  <Link to="/help" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Help Center
                  </Link>
                  <hr className="border-gray-700 my-1" />
                  <button onClick={() => alert('Logged Out')} className="w-full text-left block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Sign out
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-gray-300 transition duration-150 p-1"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className="md:hidden">
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/95 shadow-xl pb-4 transition-all duration-300 ease-in-out border-t border-gray-800">
            <nav className="flex flex-col space-y-3 px-4 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className="block text-white text-lg font-semibold py-2 hover:text-red-600 transition duration-150 border-b border-gray-800 last:border-b-0"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;