const questions = [
  // Monad (1: The Origin) ↔ Decad (10: The Completer)
  {
    id: 1,
    text: "I feel naturally drawn to leadership roles in group settings.",
    primary: "Monad",
    opposite: "Decad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 2,
    text: "I prefer to work independently and rely on my own abilities to succeed.",
    primary: "Monad",
    opposite: "Decad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 3,
    text: "I feel driven by a strong sense of purpose that guides my actions.",
    primary: "Monad",
    opposite: "Decad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },

  // Dyad (2: The Harmonizer) ↔ Ennead (9: The Humanitarian)
  {
    id: 4,
    text: "I enjoy mediating conflicts and helping others find common ground.",
    primary: "Dyad",
    opposite: "Ennead",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 5,
    text: "I value harmony in my relationships, even if it requires compromise.",
    primary: "Dyad",
    opposite: "Ennead",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 6,
    text: "I prioritize creating balance in all aspects of my life.",
    primary: "Dyad",
    opposite: "Ennead",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },

  // Triad (3: The Synthesizer) ↔ Octad (8: The Strategist)
  {
    id: 7,
    text: "I enjoy combining ideas from different areas to create something new.",
    primary: "Triad",
    opposite: "Octad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 8,
    text: "I often seek creative solutions to complex problems.",
    primary: "Triad",
    opposite: "Octad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 9,
    text: "I feel most engaged when I can experiment with new ideas.",
    primary: "Triad",
    opposite: "Octad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },

  // Tetrad (4: The Architect) ↔ Heptad (7: The Mystic)
  {
    id: 10,
    text: "I prefer having a structured plan over leaving things to chance.",
    primary: "Tetrad",
    opposite: "Heptad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 11,
    text: "I thrive in environments with clear rules and expectations.",
    primary: "Tetrad",
    opposite: "Heptad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 12,
    text: "I enjoy organizing tasks to create order and efficiency.",
    primary: "Tetrad",
    opposite: "Heptad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },

  // Pentad (5: The Seeker) ↔ Hexad (6: The Caregiver)
  {
    id: 13,
    text: "I am driven to learn new things, even when they seem unrelated to my current goals.",
    primary: "Pentad",
    opposite: "Hexad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 14,
    text: "I am willing to take risks to explore new opportunities and experiences.",
    primary: "Pentad",
    opposite: "Hexad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 15,
    text: "I prefer variety and adventure over sticking to routines.",
    primary: "Pentad",
    opposite: "Hexad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },

  // Hexad (6: The Caregiver) ↔ Pentad (5: The Seeker)
  {
    id: 16,
    text: "Helping others brings me more fulfillment than pursuing my own goals.",
    primary: "Hexad",
    opposite: "Pentad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 17,
    text: "I often prioritize the needs of others, even at a cost to myself.",
    primary: "Hexad",
    opposite: "Pentad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 18,
    text: "I feel a strong responsibility to support my community or family.",
    primary: "Hexad",
    opposite: "Pentad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },

  // Heptad (7: The Mystic) ↔ Tetrad (4: The Architect)
  {
    id: 19,
    text: "I often reflect deeply on the meaning of life and my place in the universe.",
    primary: "Heptad",
    opposite: "Tetrad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 20,
    text: "I enjoy exploring spiritual or philosophical questions about existence.",
    primary: "Heptad",
    opposite: "Tetrad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 21,
    text: "I feel connected to something greater than myself, whether it’s spiritual or universal.",
    primary: "Heptad",
    opposite: "Tetrad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },

  // Octad (8: The Strategist) ↔ Triad (3: The Synthesizer)
  {
    id: 22,
    text: "I prefer to plan long-term strategies rather than acting on impulse.",
    primary: "Octad",
    opposite: "Triad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 23,
    text: "I excel at organizing resources and people to achieve complex goals.",
    primary: "Octad",
    opposite: "Triad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 24,
    text: "I feel confident when taking on leadership roles in structured projects.",
    primary: "Octad",
    opposite: "Triad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },

  // Ennead (9: The Humanitarian) ↔ Dyad (2: The Harmonizer)
  {
    id: 25,
    text: "I feel fulfilled when I contribute to the well-being of others.",
    primary: "Ennead",
    opposite: "Dyad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 26,
    text: "I believe fairness and justice should guide every decision.",
    primary: "Ennead",
    opposite: "Dyad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 27,
    text: "I often advocate for the rights of others, even if it requires personal sacrifice.",
    primary: "Ennead",
    opposite: "Dyad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },

  // Decad (10: The Completer) ↔ Monad (1: The Origin)
  {
    id: 28,
    text: "I feel a strong sense of satisfaction when I complete a task thoroughly.",
    primary: "Decad",
    opposite: "Monad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 29,
    text: "I enjoy setting clear goals and achieving them step by step.",
    primary: "Decad",
    opposite: "Monad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
  {
    id: 30,
    text: "I strive for perfection and completeness in everything I do.",
    primary: "Decad",
    opposite: "Monad",
    options: [
      { text: "Strongly Agree", points: 5 },
      { text: "Agree", points: 4 },
      { text: "Neutral", points: 3 },
      { text: "Disagree", points: 2 },
      { text: "Strongly Disagree", points: 1 },
    ],
  },
];

export default questions;
