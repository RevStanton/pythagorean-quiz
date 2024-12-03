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
    const maxPossibleScores = {};
  
    // Initialize scores and max possible scores for all principles
    const principles = [
      "Monad", "Dyad", "Triad", "Tetrad", "Pentad",
      "Hexad", "Heptad", "Octad", "Ennead", "Decad"
    ];
  
    principles.forEach((principle) => {
      scores[principle] = 0;
      maxPossibleScores[principle] = 15; // Each principle appears 3 times as primary, max 5 points each
    });
  
    // Calculate user's scores based on their answers
    answers.forEach((answer, index) => {
      const question = shuffledQuestions[index];
      const { primary, opposite } = question;
      const points = answer.points;
  
      // Assign points to primary principle
      scores[primary] += points;
  
      // Assign inverse points to opposite principle
      const inversePoints = 6 - points; // So that Strongly Agree (5 points) gives 1 point to opposite
      scores[opposite] += inversePoints;
    });
  
    // Normalize scores to percentages (optional)
    Object.keys(scores).forEach((principle) => {
      scores[principle] = (scores[principle] / maxPossibleScores[principle]) * 100;
    });
  
    // Sort principles by normalized score
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
        <Quiz questions={shuffledQuestions} onComplete={handleComplete} />
      ) : (
        <p>Loading questions... Please wait.</p>
      )}
    </div>
  );
}

export default QuizPage;
