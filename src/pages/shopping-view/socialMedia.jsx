import React from 'react';
import ss1 from '../../assets/ss1.jpg';
import ss2 from '../../assets/ss2.jpg';
import ss3 from '../../assets/ss3.jpg';

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Shalini Mondal</h2>
      
      <div className="flex gap-6 mb-6">
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/shalini_mondal?igsh=MW5hbmV2YjVtemIyaA=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Instagram SVG icon path */}
          </svg>
          <span>Instagram</span>
        </a>

        {/* YouTube Link */}
        <a
          href="https://youtube.com/@shalinimondal5254?si=pqnCe1KkqWmDNdQ8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* YouTube SVG icon path */}
          </svg>
          <span>YouTube</span>
        </a>

        {/* Facebook Link */}
        <a
          href="https://www.facebook.com/yourfacebookprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Facebook SVG icon path */}
          </svg>
          <span>Facebook</span>
        </a>
      </div>

      {/* Larger Screenshot Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[ss1,ss2,ss3].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
