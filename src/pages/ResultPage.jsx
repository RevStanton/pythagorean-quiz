import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import "../styles/ResultPage.css";
import principleCombinations from "../data/principleCombinations";

// Import individual principle modules
import Monad from "../principles/Monad";
import Dyad from "../principles/Dyad";
import Triad from "../principles/Triad";
import Tetrad from "../principles/Tetrad";
import Pentad from "../principles/Pentad";
import Hexad from "../principles/Hexad";
import Heptad from "../principles/Heptad";
import Octad from "../principles/Octad";
import Ennead from "../principles/Ennead";
import Decad from "../principles/Decad";

// Map principles to their modules
const principleModules = {
  Monad,
  Dyad,
  Triad,
  Tetrad,
  Pentad,
  Hexad,
  Heptad,
  Octad,
  Ennead,
  Decad,
};

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [savedResult, setSavedResult] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState("");

  const { dominantPrinciple, secondaryPrinciple } = location.state || {};
  const primaryResult = principleModules[dominantPrinciple];
  const secondaryResult = principleModules[secondaryPrinciple];

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
      navigate("/signin");
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

  const displayPrimaryResult = savedResult
    ? principleModules[savedResult]
    : primaryResult;
  const combinationDescription =
    principleCombinations[dominantPrinciple]?.[secondaryPrinciple] || "";

  return (
    <div className="result-page">
      {/* Primary Principle Section */}
      <div className="result-section">
        <h1>{displayPrimaryResult.name}</h1>
        <p>{displayPrimaryResult.description}</p>
        <h3>What It Means for You:</h3>
        <ul>
          {displayPrimaryResult.strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
        <h3>Opportunities for Growth:</h3>
        <ul>
          {displayPrimaryResult.growth.map((growth, index) => (
            <li key={index}>{growth}</li>
          ))}
        </ul>
        <h3>Practical Exercises:</h3>
        <ul>
          {displayPrimaryResult.exercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
        <h3>Advice from Pythagoras:</h3>
        <p>{displayPrimaryResult.advice}</p>
      </div>

      {/* Secondary Principle Section */}
      {secondaryPrinciple && combinationDescription && (
        <div className="result-section secondary">
          <h2>Secondary Principle: {secondaryResult.name}</h2>
          <p>{combinationDescription}</p>
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
