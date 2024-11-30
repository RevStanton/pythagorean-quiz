import React from "react";
import principles from "../data/principles"; // Import principles data
import "../styles/PrinciplesPage.css"; // Import styles

function PrinciplesPage() {
  return (
    <div className="principles-container">
      <h1>Explore the Pythagorean Principles</h1>
      <p>
        Learn about the Pythagorean principles and discover how they can help
        you understand your unique strengths, growth areas, and life path.
      </p>
      <ul className="principles-list">
        {Object.entries(principles).map(([key, value]) => (
          <li key={key} className="principle-item">
            <div className="principle-title">{value.title}</div>
            <div className="principle-description">{value.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrinciplesPage;
