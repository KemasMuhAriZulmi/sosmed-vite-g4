// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex-shrink-0 w-56 p-4 bg-gray-800">
      {/* Sidebar content */}
      <div className="flex items-center mb-8">
        {/* Sidebar header */}
        <img className="h-8 w-auto" src="logo.png" alt="Logo" />
        <span className="ml-2 text-white font-semibold text-xl">Twitter Clone</span>
      </div>
      <ul className="space-y-2">
        <li>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Profile</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
