import React from 'react';
import Sidebar from '../../components/sidebar';
import MainContent from '../../components/mian-content';
import SuggestionBox from '../../components/suggestion-box';

const Home = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
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

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Main content here */}
        <h1 className="text-2xl font-bold mb-4">Welcome to Twitter Clone</h1>
        {/* Display other user's content */}
      </div>

      {/* Suggestion box */}
      <div className="w-64 p-4">
        <h2 className="text-xl font-bold mb-4">Suggestions</h2>
        {/* Display suggested users */}
      </div>
    </div>
  );
};

export default Home;