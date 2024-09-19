import React from 'react';

const Navbar = ({ userName, onExit }) => {
  return (
    <nav className="bg-gray-100 px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-bold text-pink-600">QUIZMania</h1>
      {userName && <span className="text-xl text-gray-800">Hello, {userName}</span>}
      <button 
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        onClick={onExit}
      >
        Exit Quiz
      </button>
    </nav>
  );
};

export default Navbar;
