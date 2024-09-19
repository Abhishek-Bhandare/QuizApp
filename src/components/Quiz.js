import React, { useState, useEffect } from 'react';

const Quiz = ({ category, questions, onQuizEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);

  const totalQuestions = questions.length;

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      handleNext();
    }
  }, [timer]);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setTimer(10);
  };

  const handleSkip = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setTimer(10);
  };

  if (currentQuestionIndex >= totalQuestions) {
    onQuizEnd(score);
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full p-5">

      <div className="flex items-center justify-between w-full my-5">
        <div className="text-pink-600 text-lg font-bold">
          {currentQuestionIndex + 1} / {totalQuestions}
        </div>
        <div className="text-gray-700 text-lg font-bold">{`0:${timer.toString().padStart(2, '0')}`}</div>
      </div>

      <div className="w-full bg-gray-300 h-2 mb-5 rounded-full">
        <div
          className="bg-pink-600 h-2 rounded-full"
          style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      <div className="text-lg font-semibold text-gray-800 mb-5">
        {questions[currentQuestionIndex].question}
      </div>

      <div className="w-full space-y-4">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${
              selectedOption === option ? 'border-pink-600 bg-pink-50' : 'border-gray-300'
            }`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              className="mr-4"
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-between w-full mt-8">
        <button
          onClick={handleSkip}
          className="text-pink-600 bg-transparent px-4 py-2 rounded-md"
        >
          Skip this question
        </button>

        <button
          onClick={handleNext}
          className="bg-pink-600 text-white px-6 py-2 rounded-md"
          disabled={!selectedOption}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
