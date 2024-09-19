import React from 'react';

const Score = ({ score, totalQuestions }) => {
  const performanceMessage =
    score / totalQuestions > 0.7 ? 'Great job!' : 'Keep practicing!';

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-lg">Your Score: {score}/{totalQuestions}</p>
        <p className="text-gray-500 mt-4">{performanceMessage}</p>
      </div>
    </div>
  );
};

export default Score;
