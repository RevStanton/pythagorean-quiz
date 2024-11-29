import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "../styles/SignInPage.css";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      let userCredential;

      if (isSigningUp) {
        // Sign up logic
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Sign in logic
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }

      // Retrieve saved result if available
      const userRef = doc(db, "users", userCredential.user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const savedResult = userDoc.data().result;
        console.log("Saved Result:", savedResult);
        // Redirect to the result page with the saved result
        navigate("/results", { state: { dominantPrinciple: savedResult } });
      } else {
        // If no saved result, redirect to quiz
        navigate("/quiz");
      }
    } catch (error) {
      setError(error.message); // Show error message if sign-in or sign-up fails
    }
  };

  return (
    <div className="signin-page">
      <h1>{isSigningUp ? "Sign Up" : "Sign In"}</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSigningUp ? "Sign Up" : "Sign In"}</button>
      </form>
      <p>
        {isSigningUp
          ? "Already have an account? "
          : "Don't have an account? "}
        <span
          onClick={() => setIsSigningUp(!isSigningUp)}
          className="toggle-auth"
        >
          {isSigningUp ? "Sign In" : "Sign Up"}
        </span>
      </p>
    </div>
  );
}

export default SignInPage;
