import React from 'react';

const Results = ({ score, totalQuestions, correctAnswers, incorrectAnswers, unanswered, onRetake }) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="mb-6">
          <div className="text-green-500 text-6xl mb-2">✓</div>
          <h1 className="text-2xl font-semibold text-gray-800">CONGRATULATION</h1>
          <p className="text-gray-600">You successfully completed the quiz and hold</p>
        </div>
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-700">Your Score</p>
          <p className="text-5xl font-bold text-green-600">{percentage}%</p>
          <p className="text-xl font-semibold text-gray-800 mt-2">{percentage >= 80 ? 'Great job!' : 'Good effort!'}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border text-left w-full mb-6">
          <p className="font-medium text-lg mb-3">Out of {totalQuestions} questions:</p>
          <ul className="space-y-2">
            <li className="text-green-600">
              <span className="font-semibold text-lg">{correctAnswers}</span> Correct
            </li>
            <li className="text-red-600">
              <span className="font-semibold text-lg">{incorrectAnswers}</span> Incorrect
            </li>
            <li className="text-gray-600">
              <span className="font-semibold text-lg">{unanswered}</span> Not answered
            </li>
          </ul>
        </div>
        <button
          onClick={onRetake}
          className="bg-pink-600 text-white py-2 px-6 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-pink-700"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default Results;
