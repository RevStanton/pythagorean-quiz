const questions = [
  // Monad (1: The Origin)
  {
    id: 1,
    text: "I feel naturally drawn to leadership roles in group settings.",
    options: [
      { text: "Strongly Agree", primary: "Monad", secondary: "Octad", points: 5 },
      { text: "Agree", primary: "Monad", secondary: "Octad", points: 4 },
      { text: "Neutral", primary: "Monad", secondary: "Tetrad", points: 3 },
      { text: "Disagree", primary: "Tetrad", secondary: "Dyad", points: 2 },
      { text: "Strongly Disagree", primary: "Dyad", secondary: "Triad", points: 1 }, // Adjusted to Triad
    ],
  },
  {
    id: 2,
    text: "I prefer to work independently and rely on my own abilities to succeed.",
    options: [
      { text: "Strongly Agree", primary: "Monad", secondary: "Heptad", points: 5 },
      { text: "Agree", primary: "Monad", secondary: "Heptad", points: 4 },
      { text: "Neutral", primary: "Monad", secondary: "Decad", points: 3 },
      { text: "Disagree", primary: "Decad", secondary: "Triad", points: 2 },
      { text: "Strongly Disagree", primary: "Triad", secondary: "Dyad", points: 1 }, // Reduced focus on Ennead
    ],
  },
  {
    id: 3,
    text: "I feel driven by a strong sense of purpose that guides my actions.",
    options: [
      { text: "Strongly Agree", primary: "Monad", secondary: "Pentad", points: 5 },
      { text: "Agree", primary: "Monad", secondary: "Pentad", points: 4 },
      { text: "Neutral", primary: "Monad", secondary: "Heptad", points: 3 },
      { text: "Disagree", primary: "Heptad", secondary: "Octad", points: 2 }, // Reduced Ennead
      { text: "Strongly Disagree", primary: "Octad", secondary: "Hexad", points: 1 },
    ],
  },

  // Dyad (2: The Harmonizer)
  {
    id: 4,
    text: "I enjoy mediating conflicts and helping others find common ground.",
    options: [
      { text: "Strongly Agree", primary: "Dyad", secondary: "Hexad", points: 5 },
      { text: "Agree", primary: "Dyad", secondary: "Hexad", points: 4 },
      { text: "Neutral", primary: "Dyad", secondary: "Tetrad", points: 3 },
      { text: "Disagree", primary: "Tetrad", secondary: "Monad", points: 2 },
      { text: "Strongly Disagree", primary: "Monad", secondary: "Pentad", points: 1 }, // Added variety
    ],
  },
  {
    id: 5,
    text: "I value harmony in my relationships, even if it requires compromise.",
    options: [
      { text: "Strongly Agree", primary: "Dyad", secondary: "Decad", points: 5 },
      { text: "Agree", primary: "Dyad", secondary: "Decad", points: 4 },
      { text: "Neutral", primary: "Dyad", secondary: "Tetrad", points: 3 },
      { text: "Disagree", primary: "Tetrad", secondary: "Triad", points: 2 },
      { text: "Strongly Disagree", primary: "Triad", secondary: "Monad", points: 1 },
    ],
  },
  {
    id: 6,
    text: "I prioritize creating balance in all aspects of my life.",
    options: [
      { text: "Strongly Agree", primary: "Dyad", secondary: "Hexad", points: 5 },
      { text: "Agree", primary: "Dyad", secondary: "Hexad", points: 4 },
      { text: "Neutral", primary: "Dyad", secondary: "Pentad", points: 3 }, // Shifted to Pentad
      { text: "Disagree", primary: "Pentad", secondary: "Octad", points: 2 },
      { text: "Strongly Disagree", primary: "Octad", secondary: "Monad", points: 1 }, // Reduced Ennead
    ],
  },

  // Triad (3: The Synthesizer)
  {
    id: 7,
    text: "I enjoy combining ideas from different areas to create something new.",
    options: [
      { text: "Strongly Agree", primary: "Triad", secondary: "Pentad", points: 5 },
      { text: "Agree", primary: "Triad", secondary: "Pentad", points: 4 },
      { text: "Neutral", primary: "Triad", secondary: "Octad", points: 3 },
      { text: "Disagree", primary: "Octad", secondary: "Hexad", points: 2 },
      { text: "Strongly Disagree", primary: "Hexad", secondary: "Decad", points: 1 },
    ],
  },
// Triad (3: The Synthesizer) - Continued
{
  id: 8,
  text: "I often seek creative solutions to complex problems.",
  options: [
    { text: "Strongly Agree", primary: "Triad", secondary: "Pentad", points: 5 },
    { text: "Agree", primary: "Triad", secondary: "Pentad", points: 4 },
    { text: "Neutral", primary: "Triad", secondary: "Hexad", points: 3 },
    { text: "Disagree", primary: "Hexad", secondary: "Tetrad", points: 2 },
    { text: "Strongly Disagree", primary: "Tetrad", secondary: "Monad", points: 1 },
  ],
},
{
  id: 9,
  text: "I feel most engaged when I can experiment with new ideas.",
  options: [
    { text: "Strongly Agree", primary: "Triad", secondary: "Ennead", points: 5 },
    { text: "Agree", primary: "Triad", secondary: "Ennead", points: 4 },
    { text: "Neutral", primary: "Triad", secondary: "Decad", points: 3 },
    { text: "Disagree", primary: "Decad", secondary: "Dyad", points: 2 },
    { text: "Strongly Disagree", primary: "Dyad", secondary: "Hexad", points: 1 },
  ],
},

// Tetrad (4: The Architect)
{
  id: 10,
  text: "I prefer having a structured plan over leaving things to chance.",
  options: [
    { text: "Strongly Agree", primary: "Tetrad", secondary: "Octad", points: 5 },
    { text: "Agree", primary: "Tetrad", secondary: "Octad", points: 4 },
    { text: "Neutral", primary: "Tetrad", secondary: "Decad", points: 3 },
    { text: "Disagree", primary: "Decad", secondary: "Monad", points: 2 },
    { text: "Strongly Disagree", primary: "Monad", secondary: "Triad", points: 1 },
  ],
},
{
  id: 11,
  text: "I thrive in environments with clear rules and expectations.",
  options: [
    { text: "Strongly Agree", primary: "Tetrad", secondary: "Decad", points: 5 },
    { text: "Agree", primary: "Tetrad", secondary: "Decad", points: 4 },
    { text: "Neutral", primary: "Tetrad", secondary: "Hexad", points: 3 },
    { text: "Disagree", primary: "Hexad", secondary: "Ennead", points: 2 },
    { text: "Strongly Disagree", primary: "Ennead", secondary: "Dyad", points: 1 },
  ],
},
{
  id: 12,
  text: "I enjoy organizing tasks to create order and efficiency.",
  options: [
    { text: "Strongly Agree", primary: "Tetrad", secondary: "Octad", points: 5 },
    { text: "Agree", primary: "Tetrad", secondary: "Octad", points: 4 },
    { text: "Neutral", primary: "Tetrad", secondary: "Triad", points: 3 },
    { text: "Disagree", primary: "Triad", secondary: "Pentad", points: 2 },
    { text: "Strongly Disagree", primary: "Pentad", secondary: "Heptad", points: 1 },
  ],
},

// Pentad (5: The Seeker)
{
  id: 13,
  text: "I am driven to learn new things, even when they seem unrelated to my current goals.",
  options: [
    { text: "Strongly Agree", primary: "Pentad", secondary: "Heptad", points: 5 },
    { text: "Agree", primary: "Pentad", secondary: "Heptad", points: 4 },
    { text: "Neutral", primary: "Pentad", secondary: "Decad", points: 3 },
    { text: "Disagree", primary: "Decad", secondary: "Octad", points: 2 },
    { text: "Strongly Disagree", primary: "Octad", secondary: "Dyad", points: 1 },
  ],
},
{
  id: 14,
  text: "I am willing to take risks to explore new opportunities and experiences.",
  options: [
    { text: "Strongly Agree", primary: "Pentad", secondary: "Triad", points: 5 },
    { text: "Agree", primary: "Pentad", secondary: "Triad", points: 4 },
    { text: "Neutral", primary: "Pentad", secondary: "Ennead", points: 3 },
    { text: "Disagree", primary: "Ennead", secondary: "Hexad", points: 2 },
    { text: "Strongly Disagree", primary: "Hexad", secondary: "Tetrad", points: 1 },
  ],
},
{
  id: 15,
  text: "I prefer variety and adventure over sticking to routines.",
  options: [
    { text: "Strongly Agree", primary: "Pentad", secondary: "Tetrad", points: 5 },
    { text: "Agree", primary: "Pentad", secondary: "Tetrad", points: 4 },
    { text: "Neutral", primary: "Pentad", secondary: "Dyad", points: 3 },
    { text: "Disagree", primary: "Dyad", secondary: "Monad", points: 2 },
    { text: "Strongly Disagree", primary: "Monad", secondary: "Heptad", points: 1 },
  ],
},
// Hexad (6: The Caregiver)
{
  id: 16,
  text: "Helping others brings me more fulfillment than pursuing my own goals.",
  options: [
    { text: "Strongly Agree", primary: "Hexad", secondary: "Ennead", points: 5 },
    { text: "Agree", primary: "Hexad", secondary: "Ennead", points: 4 },
    { text: "Neutral", primary: "Hexad", secondary: "Dyad", points: 3 },
    { text: "Disagree", primary: "Dyad", secondary: "Monad", points: 2 },
    { text: "Strongly Disagree", primary: "Monad", secondary: "Octad", points: 1 },
  ],
},
{
  id: 17,
  text: "I often prioritize the needs of others, even at a cost to myself.",
  options: [
    { text: "Strongly Agree", primary: "Hexad", secondary: "Tetrad", points: 5 },
    { text: "Agree", primary: "Hexad", secondary: "Tetrad", points: 4 },
    { text: "Neutral", primary: "Hexad", secondary: "Heptad", points: 3 },
    { text: "Disagree", primary: "Heptad", secondary: "Pentad", points: 2 },
    { text: "Strongly Disagree", primary: "Pentad", secondary: "Decad", points: 1 },
  ],
},
{
  id: 18,
  text: "I feel a strong responsibility to support my community or family.",
  options: [
    { text: "Strongly Agree", primary: "Hexad", secondary: "Ennead", points: 5 },
    { text: "Agree", primary: "Hexad", secondary: "Ennead", points: 4 },
    { text: "Neutral", primary: "Hexad", secondary: "Decad", points: 3 },
    { text: "Disagree", primary: "Decad", secondary: "Triad", points: 2 },
    { text: "Strongly Disagree", primary: "Triad", secondary: "Tetrad", points: 1 },
  ],
},

// Heptad (7: The Mystic)
{
  id: 19,
  text: "I often reflect deeply on the meaning of life and my place in the universe.",
  options: [
    { text: "Strongly Agree", primary: "Heptad", secondary: "Pentad", points: 5 },
    { text: "Agree", primary: "Heptad", secondary: "Pentad", points: 4 },
    { text: "Neutral", primary: "Heptad", secondary: "Ennead", points: 3 },
    { text: "Disagree", primary: "Ennead", secondary: "Decad", points: 2 },
    { text: "Strongly Disagree", primary: "Decad", secondary: "Octad", points: 1 },
  ],
},
{
  id: 20,
  text: "I enjoy exploring spiritual or philosophical questions about existence.",
  options: [
    { text: "Strongly Agree", primary: "Heptad", secondary: "Monad", points: 5 },
    { text: "Agree", primary: "Heptad", secondary: "Monad", points: 4 },
    { text: "Neutral", primary: "Heptad", secondary: "Hexad", points: 3 },
    { text: "Disagree", primary: "Hexad", secondary: "Dyad", points: 2 },
    { text: "Strongly Disagree", primary: "Dyad", secondary: "Tetrad", points: 1 },
  ],
},
{
  id: 21,
  text: "I feel connected to something greater than myself, whether it’s spiritual or universal.",
  options: [
    { text: "Strongly Agree", primary: "Heptad", secondary: "Ennead", points: 5 },
    { text: "Agree", primary: "Heptad", secondary: "Ennead", points: 4 },
    { text: "Neutral", primary: "Heptad", secondary: "Tetrad", points: 3 },
    { text: "Disagree", primary: "Tetrad", secondary: "Octad", points: 2 },
    { text: "Strongly Disagree", primary: "Octad", secondary: "Triad", points: 1 },
  ],
},

// Octad (8: The Strategist)
{
  id: 22,
  text: "I prefer to plan long-term strategies rather than acting on impulse.",
  options: [
    { text: "Strongly Agree", primary: "Octad", secondary: "Tetrad", points: 5 },
    { text: "Agree", primary: "Octad", secondary: "Tetrad", points: 4 },
    { text: "Neutral", primary: "Octad", secondary: "Decad", points: 3 },
    { text: "Disagree", primary: "Decad", secondary: "Triad", points: 2 },
    { text: "Strongly Disagree", primary: "Triad", secondary: "Dyad", points: 1 },
  ],
},
{
  id: 23,
  text: "I excel at organizing resources and people to achieve complex goals.",
  options: [
    { text: "Strongly Agree", primary: "Octad", secondary: "Monad", points: 5 },
    { text: "Agree", primary: "Octad", secondary: "Monad", points: 4 },
    { text: "Neutral", primary: "Octad", secondary: "Hexad", points: 3 },
    { text: "Disagree", primary: "Hexad", secondary: "Ennead", points: 2 },
    { text: "Strongly Disagree", primary: "Ennead", secondary: "Pentad", points: 1 },
  ],
},
{
  id: 24,
  text: "I feel confident when taking on leadership roles in structured projects.",
  options: [
    { text: "Strongly Agree", primary: "Octad", secondary: "Tetrad", points: 5 },
    { text: "Agree", primary: "Octad", secondary: "Tetrad", points: 4 },
    { text: "Neutral", primary: "Octad", secondary: "Monad", points: 3 },
    { text: "Disagree", primary: "Monad", secondary: "Heptad", points: 2 },
    { text: "Strongly Disagree", primary: "Heptad", secondary: "Pentad", points: 1 },
  ],
},
// Ennead (9: The Humanitarian)
{
  id: 25,
  text: "I feel fulfilled when I contribute to the well-being of others.",
  options: [
    { text: "Strongly Agree", primary: "Ennead", secondary: "Hexad", points: 5 },
    { text: "Agree", primary: "Ennead", secondary: "Hexad", points: 4 },
    { text: "Neutral", primary: "Ennead", secondary: "Dyad", points: 3 },
    { text: "Disagree", primary: "Dyad", secondary: "Tetrad", points: 2 },
    { text: "Strongly Disagree", primary: "Tetrad", secondary: "Decad", points: 1 },
  ],
},
{
  id: 26,
  text: "I believe fairness and justice should guide every decision.",
  options: [
    { text: "Strongly Agree", primary: "Ennead", secondary: "Monad", points: 5 },
    { text: "Agree", primary: "Ennead", secondary: "Monad", points: 4 },
    { text: "Neutral", primary: "Ennead", secondary: "Octad", points: 3 },
    { text: "Disagree", primary: "Octad", secondary: "Heptad", points: 2 },
    { text: "Strongly Disagree", primary: "Heptad", secondary: "Pentad", points: 1 },
  ],
},
{
  id: 27,
  text: "I often advocate for the rights of others, even if it requires personal sacrifice.",
  options: [
    { text: "Strongly Agree", primary: "Ennead", secondary: "Heptad", points: 5 },
    { text: "Agree", primary: "Ennead", secondary: "Heptad", points: 4 },
    { text: "Neutral", primary: "Ennead", secondary: "Hexad", points: 3 },
    { text: "Disagree", primary: "Hexad", secondary: "Triad", points: 2 },
    { text: "Strongly Disagree", primary: "Triad", secondary: "Dyad", points: 1 },
  ],
},

// Decad (10: The Completer)
{
  id: 28,
  text: "I feel a strong sense of satisfaction when I complete a task thoroughly.",
  options: [
    { text: "Strongly Agree", primary: "Decad", secondary: "Tetrad", points: 5 },
    { text: "Agree", primary: "Decad", secondary: "Tetrad", points: 4 },
    { text: "Neutral", primary: "Decad", secondary: "Octad", points: 3 },
    { text: "Disagree", primary: "Octad", secondary: "Pentad", points: 2 },
    { text: "Strongly Disagree", primary: "Pentad", secondary: "Dyad", points: 1 },
  ],
},
{
  id: 29,
  text: "I enjoy setting clear goals and achieving them step by step.",
  options: [
    { text: "Strongly Agree", primary: "Decad", secondary: "Monad", points: 5 },
    { text: "Agree", primary: "Decad", secondary: "Monad", points: 4 },
    { text: "Neutral", primary: "Decad", secondary: "Hexad", points: 3 },
    { text: "Disagree", primary: "Hexad", secondary: "Heptad", points: 2 },
    { text: "Strongly Disagree", primary: "Heptad", secondary: "Triad", points: 1 },
  ],
},
{
  id: 30,
  text: "I strive for perfection and completeness in everything I do.",
  options: [
    { text: "Strongly Agree", primary: "Decad", secondary: "Octad", points: 5 },
    { text: "Agree", primary: "Decad", secondary: "Octad", points: 4 },
    { text: "Neutral", primary: "Decad", secondary: "Ennead", points: 3 },
    { text: "Disagree", primary: "Ennead", secondary: "Triad", points: 2 },
    { text: "Strongly Disagree", primary: "Triad", secondary: "Dyad", points: 1 },
  ],
},

  ];
  
  export default questions;
  