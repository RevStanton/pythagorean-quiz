import questions from "./data/questions.js";

const primaryCounts = {};
const secondaryCounts = {};

// Initialize counts for all principles
questions.forEach((question) => {
  question.options.forEach((option) => {
    if (option.primary) {
      primaryCounts[option.primary] = primaryCounts[option.primary] || 0;
    }
    if (option.secondary) {
      secondaryCounts[option.secondary] = secondaryCounts[option.secondary] || 0;
    }
  });
});

// Count occurrences for primary and secondary principles
questions.forEach((question) => {
  question.options.forEach((option) => {
    if (option.primary) {
      primaryCounts[option.primary] += option.points;
    }
    if (option.secondary) {
      secondaryCounts[option.secondary] += Math.floor(option.points / 2); // Adjust for weight of secondary
    }
  });
});

console.log("Primary Principle Scoring Distribution:");
console.log(primaryCounts);

console.log("\nSecondary Principle Scoring Distribution:");
console.log(secondaryCounts);
