import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import results from "../data/results";
import "../styles/ResultPage.css";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [savedResult, setSavedResult] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState("");
  const { dominantPrinciple, secondaryPrinciple } = location.state || {}; // Added secondary principle
  const primaryResult = results[dominantPrinciple];
  const secondaryResult = results[secondaryPrinciple];

  // Fetch saved results from Firestore
  useEffect(() => {
    const fetchSavedResults = async () => {
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

    fetchSavedResults();
  }, []);

  // Save results to Firestore
  const handleSaveResults = async () => {
    if (!auth.currentUser) {
      navigate("/signin"); // Redirect to sign-in page if not logged in
      return;
    }

    setIsSaving(true);
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(
        userRef,
        { result: dominantPrinciple, secondary: secondaryPrinciple },
        { merge: true }
      );
      setFeedback("Results saved successfully!");
      setSavedResult(dominantPrinciple);
    } catch (error) {
      console.error("Error saving results:", error.message);
      setFeedback("Failed to save results. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Redirect if no result is available
  if (!primaryResult && !savedResult) {
    return <h2>No result available. Please complete the quiz.</h2>;
  }

  // Determine what to display
  const displayPrimaryResult = savedResult ? results[savedResult] : primaryResult;

  return (
    <div className="result-page">
      {/* Primary Principle Section */}
      <div className="result-section">
        <h1>{displayPrimaryResult.title}</h1>
        <p>{displayPrimaryResult.description}</p>
        <h3>Advice from Pythagoras:</h3>
        <p>{displayPrimaryResult.advice}</p>
      </div>

      {/* Secondary Principle Section */}
      {secondaryResult && (
        <div className="result-section">
          <h2>Secondary Principle: {secondaryResult.title}</h2>
          <p>{secondaryResult.description}</p>
          <h3>Additional Insights:</h3>
          <p>{secondaryResult.advice}</p>
        </div>
      )}

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
          <button onClick={() => navigate("/signin")}>
            Sign in to save your results
          </button>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
