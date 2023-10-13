// SuggestionBox.js
import React from 'react';

const SuggestionBox = () => {
  return (
    <div className="w-64 p-4">
      <h2 className="text-xl font-bold mb-4">Suggestions</h2>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <img className="w-10 h-10 rounded-full" src="suggested_user1.jpg" alt="Suggested User 1" />
          <div>
            <span className="text-gray-800 font-semibold">Suggested User 1</span>
            <button className="text-blue-600 text-sm">Follo+w</button>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <img className="w-10 h-10 rounded-full" src="suggested_user2.jpg" alt="Suggested User 2" />
          <div>
            <span className="text-gray-800 font-semibold">Suggested User 2</span>
            <button className="text-blue-600 text-sm">Follow</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SuggestionBox;
