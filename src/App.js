import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Results from './components/Results';
import WelcomePage from './components/CategorySelection';
import Navbar from './components/Navbar';

const categories = [
  {
    id: 'js_basics',
    name: 'JavaScript Basics',
    questions: [
      {
        id: 'q1',
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: [
          "<script name='script.js'>",
          "<script href='script.js'>",
          "<script src='script.js'>",
          "<script file='script.js'>"
        ],
        correctAnswer: "<script src='script.js'>",
        timeLimit: 10
      },
      {
        id: 'q2',
        question: 'Which company developed JavaScript?',
        options: ['Microsoft', 'Netscape', 'Google', 'Mozilla'],
        correctAnswer: 'Netscape',
        timeLimit: 10
      },
      {
        id: 'q3',
        question: "What is React.js?",
        options: [
          "Open-source JavaScript back-end library",
          "JavaScript front-end library to create a database",
          "Free and open-source JavaScript front-end library",
          "None of the above"
        ],
        correctAnswer: "Free and open-source JavaScript front-end library",
        timeLimit: 10
      },
      {
        id: 'q4',
        question: "Which of the following acts as the input of a class-based component?",
        options: [
          "Class",
          "Props",
          "Factory",
          "None of the Above"
        ],
        correctAnswer: "Props",
        timeLimit: 10
      },
      {
        id: 'q5',
        question: "Which of the following is not a Hook?",
        options: [
          "useState",
          "useContext",
          "useSession",
          "None of the Above"
        ],
        correctAnswer: "useSession",
        timeLimit: 10
      }
    ]
  }
];

function App() {
  const [stage, setStage] = useState('welcome'); // welcome, quiz, results
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userName, setUserName] = useState('');
  const [scoreData, setScoreData] = useState({ correctAnswers: 0, incorrectAnswers: 0, unanswered: 0 });

  const handleStartQuiz = (name, category) => {
    setUserName(name);
    setSelectedCategory(categories.find(cat => cat.id === category));
    setStage('quiz');
  };

  const handleQuizEnd = (correct, incorrect, unanswered) => {
    setScoreData({ correctAnswers: correct, incorrectAnswers: incorrect, unanswered });
    setStage('results');
  };

  const handleRetakeQuiz = () => {
    setStage('welcome');
    setUserName('');
  };

  const handleExitQuiz = () => {
    // Exit quiz logic, e.g., navigate away
    setStage('welcome');
    setUserName('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {stage !== 'welcome' && <Navbar userName={userName} onExit={handleExitQuiz} />}
      
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        {stage === 'welcome' && (
          <WelcomePage 
            categories={categories} 
            onStartQuiz={handleStartQuiz} 
          />
        )}
        {stage === 'quiz' && (
          <Quiz
            category={selectedCategory}
            questions={selectedCategory.questions}
            onQuizEnd={(correct, incorrect, unanswered) => handleQuizEnd(correct, incorrect, unanswered)}
          />
        )}
        {stage === 'results' && (
          <Results
            score={scoreData.correctAnswers}
            totalQuestions={selectedCategory.questions.length}
            correctAnswers={scoreData.correctAnswers}
            incorrectAnswers={scoreData.incorrectAnswers}
            unanswered={scoreData.unanswered}
            onRetake={handleRetakeQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;
