import React, { useState } from 'react';
import Navbar from './Navbar';

const WelcomePage = ({ categories, onStartQuiz }) => {
  const [name, setName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleStart = () => {
    if (name.trim()) {
      onStartQuiz(name, selectedCategory);
    } else {
      alert('Please enter your name');
    }
  };

  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-8">QUIZMania</h1>
        <p className="text-lg text-gray-600 mb-6">Welcome to QUIZMania! Enter your name and select a quiz category to begin.</p>

        <div className="mb-6">
          <input 
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-3 px-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition duration-300"
          />
        </div>

        <div className="mb-6">
          <select
            className="w-full py-3 px-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition duration-300"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-pink-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition duration-300"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
