import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // For navigation
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import results from "../data/results";
import "../styles/ResultPage.css";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [savedResult, setSavedResult] = useState(null);
  const [isSaving, setIsSaving] = useState(false); // Tracks save status
  const [feedback, setFeedback] = useState(""); // Feedback message
  const { dominantPrinciple } = location.state || {}; // Passed from QuizPage
  const result = results[dominantPrinciple];

  // Fetch saved results if the user is authenticated
  useEffect(() => {
    const fetchResults = async () => {
      if (auth.currentUser) {
        try {
          const userRef = doc(db, "users", auth.currentUser.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            setSavedResult(userDoc.data().result);
          }
        } catch (error) {
          console.error("Error fetching saved results:", error.message);
        }
      }
    };

    fetchResults();
  }, []);

  // Handle saving results
  const handleSaveResults = async () => {
    if (!auth.currentUser) {
      navigate("/signin"); // Redirect to sign-in if not logged in
      return;
    }

    setIsSaving(true);
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userRef, { result: dominantPrinciple }, { merge: true });
      setFeedback("Results saved successfully!");
      setSavedResult(dominantPrinciple); // Update saved result
    } catch (error) {
      console.error("Error saving results:", error.message);
      setFeedback("Failed to save results. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!result && !savedResult) {
    return <h2>No result available. Please complete the quiz.</h2>;
  }

  const displayResult = savedResult ? results[savedResult] : result;

  return (
    <div className="result-page">
      <h1>{displayResult.title}</h1>
      <p>{displayResult.description}</p>
      <h3>Advice from Pythagoras:</h3>
      <p>{displayResult.advice}</p>

      {/* Save Results Section */}
      <div className="save-results">
        {auth.currentUser && dominantPrinciple !== savedResult ? (
          <>
            <button onClick={handleSaveResults} disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Your Results"}
            </button>
            {feedback && <p className="feedback">{feedback}</p>}
          </>
        ) : savedResult ? (
          <p>Your results are already saved!</p>
        ) : (
          <p>
            <button onClick={() => navigate("/signin")}>
              Sign in to save your results
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
