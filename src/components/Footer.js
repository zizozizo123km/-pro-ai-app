import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = [
  'Audio Description',
  'Help Center',
  'Gift Cards',
  'Investor Relations',
  'Media Center',
  'Terms of Use',
  'Privacy',
  'Legal Notices',
  'Cookie Preferences',
  'Corporate Information',
  'Contact Us',
  'Speed Test',
];

const Footer = () => {
  // Utility function to chunk the links array for grid layout (4 columns)
  const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  const linkColumns = chunkArray(footerLinks, Math.ceil(footerLinks.length / 4));

  return (
    <footer className="bg-zinc-950 text-gray-400 py-12 md:py-16 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">
          <a href="#" aria-label="Facebook" className="hover:text-white transition duration-200">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition duration-200">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition duration-200">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Youtube" className="hover:text-white transition duration-200">
            <Youtube className="h-6 w-6" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 text-sm mb-8">
          {linkColumns.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-3">
              {column.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="hover:underline text-xs md:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Service Code Button */}
        <div className="mt-8 mb-6">
          <button
            className="border border-gray-400 text-gray-400 px-3 py-1.5 text-xs hover:border-white hover:text-white transition duration-200"
          >
            Service Code
          </button>
        </div>

        {/* Copyright and Location */}
        <div className="text-xs text-gray-500 mt-6">
          © 1997-{new Date().getFullYear()} نتفلكس , Inc.
          <p className="mt-1">
            {/* Placeholder for location/language selector */}
            Language: English (US)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;