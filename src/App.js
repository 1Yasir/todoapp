import React, { useState } from 'react';

function QuizApp() {
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
  
  const handleOptionChange = (questionIdx, selectedOption) => {
    setAnswers({ ...answers, [questionIdx]: selectedOption });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = calculateScore();
    // alert(`You got ${score} correct answers out of ${questions.length}`);
    console.log(answers)
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {questions.map((question, idx) => (
          <div key={idx}>
            <h3>{question.question}</h3>
            {question.options.map((option, optionIdx) => (
              <label key={optionIdx}>
                <input
                  type="radio"
                  name={`question${idx}`}
                  value={option}
                  checked={answers[idx] === option}
                  onChange={() => handleOptionChange(idx, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuizApp;
