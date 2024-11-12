import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FFE4E1] text-gray-800 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            We are dedicated to bringing you the finest collection of sarees with a touch of elegance and tradition. Discover the beauty and grace of Indian heritage with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop/home" className="hover:underline">Home</a></li>
            <li><a href="/shop/listing" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/shalini_mondal" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Instagram SVG path */}
              </svg>
            </a>
            <a href="https://youtube.com/@shalinimondal5254" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* YouTube SVG path */}
              </svg>
            </a>
            <a href="https://www.facebook.com/yourfacebookprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook SVG path */}
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">Email: info@shalinisarees.com</p>
          <p className="text-sm">Phone: +91 12345 67890</p>
          <p className="text-sm">Address: Kolkata, West Bengal, India</p>
        </div>
      </div>
    <div>
      Made with 🩷 by 
      <div>Soumyadip</div> & 
      <div>Shruti</div>
    </div>
      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Shalini Saree. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
