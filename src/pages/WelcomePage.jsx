import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <h1>Discover Your Pythagorean Principle</h1>
      <div className="intro-section">
        <p>
          Pythagoras, the ancient Greek philosopher and mathematician, believed numbers are the essence of the universe. 
          Each number, from 1 (Monad) to 10 (Decad), carries unique meaning and represents aspects of personal growth, balance, creativity, and connection.
        </p>
        <p>
          This quiz is designed to help you uncover your dominant number based on Pythagoras' teachings. By answering a series of questions, you'll gain insights into your strengths, personality traits, and how these principles can guide your life.
        </p>
      </div>
      <div className="quiz-benefits">
        <h2>How It Works</h2>
        <ul>
          <li>Take a quick quiz to discover your Pythagorean principle.</li>
          <li>Learn what your principle reveals about your strengths and potential.</li>
          <li>Save your results and track your growth over time.</li>
        </ul>
      </div>
      <div className="disclaimer">
        <p>
          <strong>Note:</strong> We're adding more features soon! Keep an eye out for personalized insights, compatibility checks, and more.
        </p>
      </div>
      <div className="button-container">
        <button
          className="start-quiz-button"
          onClick={() => navigate("/quiz")}
        >
          Start the Quiz
        </button>
        <button
          className="sign-in-button"
          onClick={() => navigate("/signup")}
        >
          Sign Up to Save Results
        </button>
        <button
          className="sign-in-button"
          onClick={() => navigate("/signin")}
        >
          Sign In to View Results
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
