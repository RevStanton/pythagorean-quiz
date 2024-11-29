import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import Quiz from "../components/Quiz";

function QuizPage() {
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleComplete = async (answers) => {
    const scores = {};

    // Calculate scores
    answers.forEach((answer) => {
      scores[answer.primary] = (scores[answer.primary] || 0) + answer.points;
      if (answer.secondary) {
        scores[answer.secondary] = (scores[answer.secondary] || 0) + Math.floor(answer.points / 2);
      }
    });

    // Determine the dominant principle
    const dominantPrinciple = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    console.log("Dominant Principle:", dominantPrinciple);

    // Save result to Firestore if the user is authenticated
    if (auth.currentUser) {
      try {
        const userRef = doc(db, "users", auth.currentUser.uid);
        await setDoc(userRef, { result: dominantPrinciple }, { merge: true });
      } catch (error) {
        console.error("Error saving result:", error.message);
      }
    }

    // Navigate to the ResultPage with the dominant principle
    navigate("/results", { state: { dominantPrinciple } });
  };

  return (
    <div>
      <h1>Pythagorean Principles Quiz</h1>
      <Quiz answers={answers} setAnswers={setAnswers} onComplete={handleComplete} />
    </div>
  );
}

export default QuizPage;
