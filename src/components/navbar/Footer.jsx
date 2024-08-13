import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#330099] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Sections */}
        <div className="flex flex-wrap justify-between mb-6">
          {/* Group Companies */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-2">Group Companies</h4>
            <ul>
              <li><a href="#" className="hover:underline">Lagos International Airport</a></li>
              <li><a href="#" className="hover:underline">Southstream Executive</a></li>
            
            
            </ul>
          </div>
          {/* Business Solutions */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-2">Business Solutions</h4>
            <ul>
              <li><a href="#" className="hover:underline">Corporate Travel</a></li>
              <li><a href="#" className="hover:underline">Beyond Business</a></li>
           
            </ul>
          </div>
          {/* Help */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-2">Help</h4>
            <ul>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Travel Alerts</a></li>
            
            </ul>
          </div>
          {/* Awards */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-2">Awards</h4>
            <ul>
              <li><a href="#" className="hover:underline">World’s Best Airline</a></li>
        
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center border-t border-white pt-6 mt-6">
          <div className="w-full md:w-1/2 mb-6 flex items-center justify-center md:justify-start">
            <img src="/ssm 2.png" alt="ssm 2.png" className="w-32 h-auto" />
          </div>
          <div className="w-full md:w-1/2 mb-6 text-center md:text-right">
            <p className="text-sm">© 2024 South Streams Airways. All rights reserved.</p>
            <p className="text-sm">Let's stay connected: <a href="#" className="hover:underline">Click here to learn more</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
