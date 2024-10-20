import React from 'react';
import logo from '../../assets/Frame.png';



const Footer = () => {
  return (
    <footer className="bg-beige pt-12 pb-6">
      {/* Newsletter Section */}
      <div className="bg-darkBlue rounded-xl mx-auto max-w-6xl py-8 px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center m-6">
          {/* Left: Text */}
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Register Now So You Don’t Miss Our Programs
          </h2>
          {/* Right: Email Input and Button */}
          <div className="bg-white flex flex-col md:flex-row justify-center rounded-md items-center w-full md:w-auto space-y-3 md:space-y-0 md:space-x-4">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              className="w-full md:w-96 px-4 py-3 rounded-lg focus:outline-none"
            />
            <button className="h-10 w-40 bg-darkBlue text-white font-semibold  rounded-lg hover:bg-gray-200 transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <ul className="flex justify-center space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-darkBlue">Home</a></li>
          <li><a href="#" className="hover:text-darkBlue">Category</a></li>
          <li><a href="#" className="hover:text-darkBlue">About</a></li>
          <li><a href="#" className="hover:text-darkBlue">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-gray-600 hover:text-darkBlue">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-darkBlue">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-darkBlue">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-darkBlue">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2022 Monito. All rights reserved.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
            {/* Logo centered */}
            <img src={logo} alt="Logo" className="mx-auto" />
            
            {/* Links */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-darkBlue">Terms of Service</a>
              <a href="#" className="hover:text-darkBlue">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
