import React, { useState } from "react";
import questions from "../data/questions";

function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (option) => {
    // Update the answers array with the selected option
    const updatedAnswers = [...answers, option];
    setAnswers(updatedAnswers);

    // Check if this is the last question
    if (currentQuestion < questions.length - 1) {
      // Move to the next question
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Pass answers to the parent when the quiz is completed
      onComplete(updatedAnswers);
    }
  };

  // Extract current question and options for clarity
  const { text, options } = questions[currentQuestion];

  return (
  <div className="quiz-container">
  <h2>Question {currentQuestion + 1}</h2>
  <p className="question-text">{questions[currentQuestion].text}</p>
  <div className="button-container">
    {questions[currentQuestion].options.map((option, index) => (
      <button key={index} onClick={() => handleAnswer(option)}>
        {option.text}
      </button>
    ))}
    </div>
  </div>

  );
}

export default Quiz;
