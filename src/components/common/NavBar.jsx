import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-lg bg-transparent">
      {/* Left Section: Logo and Menu Links */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Frame.png" className="h-8 w-20" />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-950">
            Home
          </a>
          <a href="/Category" className="text-gray-700 hover:text-blue-950">
            Category
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-950">
            About
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-950">
            Contact
          </a>
        </div>
      </div>

      {/* Right Section: Search, Join Button, Language Selector */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search something here!"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-darkBlue"
          />
          <svg
            className="absolute left-3 top-2 w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm8-8a7.97 7.97 0 01-2.076 5.307l4.392 4.393a1 1 0 11-1.415 1.415l-4.393-4.392A7.97 7.97 0 0110 18z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Join Button */}
        <button className="bg-darkBlue text-white px-6 py-2 rounded-full hover:bg-blue-950 transition">
          Join the community
        </button>

        {/* Currency Selector */}
        <div className="flex items-center space-x-1">
          <span className="text-red-600 text-xl">★</span>
          <select
            name="currency"
            className="text-gray-700 bg-transparent border-none focus:outline-none"
          >
            <option value="VND">VND</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
