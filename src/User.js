import React, { useState } from 'react';

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Rome', 'Berlin'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      correctAnswer: 'Mars',
    },
    // Add more questions here
  ];

  const handleOptionChange = (selectedOption) => {
    setAnswers({ ...answers, [currentQuestion]: selectedOption });
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    // Perform actions after the last question is submitted
    alert(`You got ${score} correct answers out of ${questions.length}`);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, optionIdx) => (
            <label key={optionIdx}>
              <input
                type="radio"
                name={`question${currentQuestion}`}
                value={option}
                checked={answers[currentQuestion] === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
          <br />
          {currentQuestion < questions.length - 1 ? (
            <button onClick={handleNext}>Next Question</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      ) : (
        <div>
          <p>All questions completed!</p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
