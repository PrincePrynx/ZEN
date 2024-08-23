import React, { useState } from 'react';
import './ThoughtsBacklog.css';

// Function to generate a random math problem
function generateRandomProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = Math.random() > 0.5 ? '+' : '-';
  return {
    question: `${num1} ${operator} ${num2}`,
    answer: operator === '+' ? num1 + num2 : num1 - num2
  };
}

function ThoughtsBacklog({ thoughts }) {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showEntry, setShowEntry] = useState(false);
  const [quiz, setQuiz] = useState(generateRandomProblem());
  const [userAnswer, setUserAnswer] = useState('');
  const [isQuizVisible, setIsQuizVisible] = useState(false);

  // Handle card click to show quiz
  const handleCardClick = (index) => {
    setSelectedEntry(thoughts[index]);
    setIsQuizVisible(true);
  };

  // Handle quiz submission
  const handleQuizSubmit = () => {
    if (parseInt(userAnswer, 10) === quiz.answer) {
      setIsQuizVisible(false);
      setShowEntry(true);
      // Generate a new quiz question for the next entry
      setQuiz(generateRandomProblem());
    } else {
      alert('Incorrect answer. Please try again.');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  // Handle key press to submit quiz
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleQuizSubmit();
    }
  };

  // Handle click outside modal to close it
  const handleOverlayClick = () => {
    setShowEntry(false);
    setIsQuizVisible(false);
  };

  return (
    <div className="thoughts-backlog" aria-labelledby="backlog-heading">
      <h1 id="backlog-heading">YOUR THOUGHTS BACKLOG</h1>
      <div className="flashcard-container">
        {thoughts.map((thought, index) => (
          <div
            key={index}
            className="flashcard"
            onClick={() => handleCardClick(index)}
            role="button"
            aria-label={`View entry ${index + 1}`}
          >
            <div className="flashcard-title">
              ENTRY {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Math Quiz Modal */}
      {isQuizVisible && (
        <div className="modal-overlay" onClick={handleOverlayClick} aria-hidden="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="quiz-question">
              <label htmlFor="quiz-input">{quiz.question}</label>
              <input
                id="quiz-input"
                type="number"
                value={userAnswer}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter your answer"
                autoFocus
                aria-label="Quiz answer input"
              />
            </div>
            <button onClick={handleQuizSubmit} aria-label="Submit quiz answer">
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Entry Content Modal */}
      {showEntry && (
        <div className="entry-screen" onClick={handleOverlayClick} aria-hidden="true">
          <div className="entry-content" onClick={(e) => e.stopPropagation()}>
            {selectedEntry}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThoughtsBacklog;
