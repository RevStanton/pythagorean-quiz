import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import WelcomePage from "./pages/WelcomePage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <Router basename="/pythagorean-quiz">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
