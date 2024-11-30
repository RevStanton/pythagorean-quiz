import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import Quiz from "../components/Quiz";
import questions from "../data/questions";

function QuizPage() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const navigate = useNavigate();

  // Function to shuffle questions
  const shuffleQuestions = (questionsArray) => {
    const shuffled = [...questionsArray]; // Create a copy to avoid modifying the original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle questions when the component mounts
  useEffect(() => {
    setShuffledQuestions(shuffleQuestions(questions));
  }, []);

  // Handle quiz completion
  const handleComplete = async (answers) => {
    const scores = {};
    const questionCounts = {};

    // Calculate scores for each principle
    answers.forEach((answer) => {
      // Update primary scores
      scores[answer.primary] = (scores[answer.primary] || 0) + answer.points;
      questionCounts[answer.primary] = (questionCounts[answer.primary] || 0) + 1;

      // Update secondary scores with adjusted weight
      if (answer.secondary) {
        scores[answer.secondary] =
          (scores[answer.secondary] || 0) + Math.ceil(answer.points * 0.4);
      }
    });

    // Normalize scores by the number of questions
    Object.keys(scores).forEach((principle) => {
      scores[principle] /= questionCounts[principle] || 1;
    });

    // Sort principles by score
    const sortedPrinciples = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    const dominantPrinciple = sortedPrinciples[0];
    const secondaryPrinciple = sortedPrinciples[1];

    console.log("Dominant Principle:", dominantPrinciple);
    console.log("Secondary Principle:", secondaryPrinciple);

    // Save results to Firestore if the user is authenticated
    if (auth.currentUser) {
      try {
        const userRef = doc(db, "users", auth.currentUser.uid);
        await setDoc(
          userRef,
          { result: dominantPrinciple, secondary: secondaryPrinciple },
          { merge: true }
        );
      } catch (error) {
        console.error("Error saving results to Firestore:", error.message);
      }
    }

    // Navigate to the ResultPage with the primary and secondary principles
    navigate("/results", { state: { dominantPrinciple, secondaryPrinciple } });
  };

  return (
    <div>
      <h1>Pythagorean Principles Quiz</h1>
      {shuffledQuestions.length > 0 ? (
        <Quiz
          questions={shuffledQuestions}
          onComplete={handleComplete}
        />
      ) : (
        <p>Loading questions... Please wait.</p>
      )}
    </div>
  );
}

export default QuizPage;
