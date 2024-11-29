const questions = [
    // Monad (1: The Origin)
    {
      id: 1,
      text: "Do you often find yourself naturally stepping into leadership roles in group settings?",
      options: [
        { text: "Strongly Agree", primary: "Monad", secondary: "Octad", points: 5 },
        { text: "Agree", primary: "Monad", secondary: "Octad", points: 4 },
        { text: "Neutral", primary: "Monad", secondary: "Octad", points: 3 },
        { text: "Disagree", primary: "Dyad", secondary: "Hexad", points: 2 },
        { text: "Strongly Disagree", primary: "Dyad", secondary: "Hexad", points: 1 },
      ],
    },
    {
      id: 2,
      text: "Do you prefer to work independently rather than relying on others?",
      options: [
        { text: "Strongly Agree", primary: "Monad", secondary: "Hexad", points: 5 },
        { text: "Agree", primary: "Monad", secondary: "Hexad", points: 4 },
        { text: "Neutral", primary: "Monad", secondary: "Hexad", points: 3 },
        { text: "Disagree", primary: "Hexad", secondary: null, points: 2 },
        { text: "Strongly Disagree", primary: "Hexad", secondary: null, points: 1 },
      ],
    },
    {
      id: 3,
      text: "Do you feel a strong sense of purpose or direction guiding your actions?",
      options: [
        { text: "Strongly Agree", primary: "Monad", secondary: "Heptad", points: 5 },
        { text: "Agree", primary: "Monad", secondary: "Heptad", points: 4 },
        { text: "Neutral", primary: "Monad", secondary: "Heptad", points: 3 },
        { text: "Disagree", primary: "Heptad", secondary: "Ennead", points: 2 },
        { text: "Strongly Disagree", primary: "Heptad", secondary: "Ennead", points: 1 },
      ],
    },
  
    // Dyad (2: The Harmonizer)
    {
      id: 4,
      text: "Do you enjoy mediating conflicts and helping others find common ground?",
      options: [
        { text: "Strongly Agree", primary: "Dyad", secondary: "Hexad", points: 5 },
        { text: "Agree", primary: "Dyad", secondary: "Hexad", points: 4 },
        { text: "Neutral", primary: "Dyad", secondary: "Hexad", points: 3 },
        { text: "Disagree", primary: "Monad", secondary: null, points: 2 },
        { text: "Strongly Disagree", primary: "Monad", secondary: null, points: 1 },
      ],
    },
    {
      id: 5,
      text: "How often do you find yourself compromising to maintain harmony in relationships?",
      options: [
        { text: "Strongly Agree", primary: "Dyad", secondary: "Tetrad", points: 5 },
        { text: "Agree", primary: "Dyad", secondary: "Tetrad", points: 4 },
        { text: "Neutral", primary: "Dyad", secondary: "Tetrad", points: 3 },
        { text: "Disagree", primary: "Monad", secondary: null, points: 2 },
        { text: "Strongly Disagree", primary: "Monad", secondary: null, points: 1 },
      ],
    },
    {
      id: 6,
      text: "Do you think balancing different aspects of your life is a priority for you?",
      options: [
        { text: "Strongly Agree", primary: "Dyad", secondary: "Tetrad", points: 5 },
        { text: "Agree", primary: "Dyad", secondary: "Tetrad", points: 4 },
        { text: "Neutral", primary: "Dyad", secondary: "Tetrad", points: 3 },
        { text: "Disagree", primary: "Hexad", secondary: "Decad", points: 2 },
        { text: "Strongly Disagree", primary: "Hexad", secondary: "Decad", points: 1 },
      ],
    },
    {
        id: 7,
        text: "Do you enjoy expressing yourself through art, music, or writing?",
        options: [
          { text: "Strongly Agree", primary: "Triad", secondary: "Pentad", points: 5 },
          { text: "Agree", primary: "Triad", secondary: "Pentad", points: 4 },
          { text: "Neutral", primary: "Triad", secondary: "Pentad", points: 3 },
          { text: "Disagree", primary: "Monad", secondary: null, points: 2 },
          { text: "Strongly Disagree", primary: "Monad", secondary: null, points: 1 },
        ],
      },
// Triad (3: The Synthesizer)
{
    id: 8,
    text: "Do you often try to find creative solutions to problems?",
    options: [
      { text: "Strongly Agree", primary: "Triad", secondary: "Pentad", points: 5 },
      { text: "Agree", primary: "Triad", secondary: "Pentad", points: 4 },
      { text: "Neutral", primary: "Triad", secondary: "Pentad", points: 3 },
      { text: "Disagree", primary: "Tetrad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Tetrad", secondary: null, points: 1 },
    ],
  },
  {
    id: 9,
    text: "Do you value the harmony of diverse ideas coming together?",
    options: [
      { text: "Strongly Agree", primary: "Triad", secondary: "Dyad", points: 5 },
      { text: "Agree", primary: "Triad", secondary: "Dyad", points: 4 },
      { text: "Neutral", primary: "Triad", secondary: "Dyad", points: 3 },
      { text: "Disagree", primary: "Hexad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Hexad", secondary: null, points: 1 },
    ],
  },
  
  // Tetrad (4: The Architect)
  {
    id: 10,
    text: "Do you prefer having a structured plan over spontaneity?",
    options: [
      { text: "Strongly Agree", primary: "Tetrad", secondary: "Octad", points: 5 },
      { text: "Agree", primary: "Tetrad", secondary: "Octad", points: 4 },
      { text: "Neutral", primary: "Tetrad", secondary: "Octad", points: 3 },
      { text: "Disagree", primary: "Pentad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Pentad", secondary: null, points: 1 },
    ],
  },
  {
    id: 11,
    text: "Do you thrive in environments with clear rules and expectations?",
    options: [
      { text: "Strongly Agree", primary: "Tetrad", secondary: "Decad", points: 5 },
      { text: "Agree", primary: "Tetrad", secondary: "Decad", points: 4 },
      { text: "Neutral", primary: "Tetrad", secondary: "Decad", points: 3 },
      { text: "Disagree", primary: "Hexad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Hexad", secondary: null, points: 1 },
    ],
  },
  {
    id: 12,
    text: "Do you enjoy organizing things to create order and efficiency?",
    options: [
      { text: "Strongly Agree", primary: "Tetrad", secondary: "Octad", points: 5 },
      { text: "Agree", primary: "Tetrad", secondary: "Octad", points: 4 },
      { text: "Neutral", primary: "Tetrad", secondary: "Octad", points: 3 },
      { text: "Disagree", primary: "Triad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Triad", secondary: null, points: 1 },
    ],
  },
  
  // Pentad (5: The Seeker)
  {
    id: 13,
    text: "Do you enjoy learning new things, even if they don’t seem immediately useful?",
    options: [
      { text: "Strongly Agree", primary: "Pentad", secondary: "Heptad", points: 5 },
      { text: "Agree", primary: "Pentad", secondary: "Heptad", points: 4 },
      { text: "Neutral", primary: "Pentad", secondary: "Heptad", points: 3 },
      { text: "Disagree", primary: "Monad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Monad", secondary: null, points: 1 },
    ],
  },
  {
    id: 14,
    text: "Do you often take risks to explore new possibilities?",
    options: [
      { text: "Strongly Agree", primary: "Pentad", secondary: "Triad", points: 5 },
      { text: "Agree", primary: "Pentad", secondary: "Triad", points: 4 },
      { text: "Neutral", primary: "Pentad", secondary: "Triad", points: 3 },
      { text: "Disagree", primary: "Tetrad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Tetrad", secondary: null, points: 1 },
    ],
  },
  {
    id: 15,
    text: "Do you prefer a variety of experiences over routines?",
    options: [
      { text: "Strongly Agree", primary: "Pentad", secondary: "Tetrad", points: 5 },
      { text: "Agree", primary: "Pentad", secondary: "Tetrad", points: 4 },
      { text: "Neutral", primary: "Pentad", secondary: "Tetrad", points: 3 },
      { text: "Disagree", primary: "Hexad", secondary: "Heptad", points: 2 },
      { text: "Strongly Disagree", primary: "Hexad", secondary: "Heptad", points: 1 },
    ],
  },
  // Hexad (6: The Caregiver)
{
    id: 16,
    text: "Do you often prioritize helping others, even at the expense of your own time?",
    options: [
      { text: "Strongly Agree", primary: "Hexad", secondary: "Ennead", points: 5 },
      { text: "Agree", primary: "Hexad", secondary: "Ennead", points: 4 },
      { text: "Neutral", primary: "Hexad", secondary: "Ennead", points: 3 },
      { text: "Disagree", primary: "Dyad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Dyad", secondary: null, points: 1 },
    ],
  },
  {
    id: 17,
    text: "Do you find fulfillment in taking care of others and building connections?",
    options: [
      { text: "Strongly Agree", primary: "Hexad", secondary: "Dyad", points: 5 },
      { text: "Agree", primary: "Hexad", secondary: "Dyad", points: 4 },
      { text: "Neutral", primary: "Hexad", secondary: "Dyad", points: 3 },
      { text: "Disagree", primary: "Ennead", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Ennead", secondary: null, points: 1 },
    ],
  },
  {
    id: 18,
    text: "Do you feel a strong sense of responsibility toward your family or community?",
    options: [
      { text: "Strongly Agree", primary: "Hexad", secondary: "Ennead", points: 5 },
      { text: "Agree", primary: "Hexad", secondary: "Ennead", points: 4 },
      { text: "Neutral", primary: "Hexad", secondary: "Ennead", points: 3 },
      { text: "Disagree", primary: "Tetrad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Tetrad", secondary: null, points: 1 },
    ],
  },
  
  // Heptad (7: The Mystic)
  {
    id: 19,
    text: "Do you frequently reflect on the deeper meaning of life?",
    options: [
      { text: "Strongly Agree", primary: "Heptad", secondary: "Pentad", points: 5 },
      { text: "Agree", primary: "Heptad", secondary: "Pentad", points: 4 },
      { text: "Neutral", primary: "Heptad", secondary: "Pentad", points: 3 },
      { text: "Disagree", primary: "Monad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Monad", secondary: null, points: 1 },
    ],
  },
  {
    id: 20,
    text: "Do you enjoy unraveling mysteries or exploring hidden truths?",
    options: [
      { text: "Strongly Agree", primary: "Heptad", secondary: "Pentad", points: 5 },
      { text: "Agree", primary: "Heptad", secondary: "Pentad", points: 4 },
      { text: "Neutral", primary: "Heptad", secondary: "Pentad", points: 3 },
      { text: "Disagree", primary: "Octad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Octad", secondary: null, points: 1 },
    ],
  },
  {
    id: 21,
    text: "Do you feel connected to something greater than yourself?",
    options: [
      { text: "Strongly Agree", primary: "Heptad", secondary: "Ennead", points: 5 },
      { text: "Agree", primary: "Heptad", secondary: "Ennead", points: 4 },
      { text: "Neutral", primary: "Heptad", secondary: "Ennead", points: 3 },
      { text: "Disagree", primary: "Decad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Decad", secondary: null, points: 1 },
    ],
  },
  
  // Octad (8: The Strategist)
  {
    id: 22,
    text: "Do you enjoy creating long-term plans and strategies to achieve your goals?",
    options: [
      { text: "Strongly Agree", primary: "Octad", secondary: "Tetrad", points: 5 },
      { text: "Agree", primary: "Octad", secondary: "Tetrad", points: 4 },
      { text: "Neutral", primary: "Octad", secondary: "Tetrad", points: 3 },
      { text: "Disagree", primary: "Decad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Decad", secondary: null, points: 1 },
    ],
  },
  {
    id: 23,
    text: "Do you feel confident when taking on leadership roles in complex projects?",
    options: [
      { text: "Strongly Agree", primary: "Octad", secondary: "Monad", points: 5 },
      { text: "Agree", primary: "Octad", secondary: "Monad", points: 4 },
      { text: "Neutral", primary: "Octad", secondary: "Monad", points: 3 },
      { text: "Disagree", primary: "Tetrad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Tetrad", secondary: null, points: 1 },
    ],
  },
  {
    id: 24,
    text: "Do you strive for success in both personal and professional aspects of life?",
    options: [
      { text: "Strongly Agree", primary: "Octad", secondary: "Decad", points: 5 },
      { text: "Agree", primary: "Octad", secondary: "Decad", points: 4 },
      { text: "Neutral", primary: "Octad", secondary: "Decad", points: 3 },
      { text: "Disagree", primary: "Ennead", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Ennead", secondary: null, points: 1 },
    ],
  },
  // Ennead (9: The Humanitarian)
{
    id: 25,
    text: "Do you find joy in helping others succeed?",
    options: [
      { text: "Strongly Agree", primary: "Ennead", secondary: "Hexad", points: 5 },
      { text: "Agree", primary: "Ennead", secondary: "Hexad", points: 4 },
      { text: "Neutral", primary: "Ennead", secondary: "Hexad", points: 3 },
      { text: "Disagree", primary: "Dyad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Dyad", secondary: null, points: 1 },
    ],
  },
  {
    id: 26,
    text: "Do you believe everyone deserves an equal chance at happiness?",
    options: [
      { text: "Strongly Agree", primary: "Ennead", secondary: "Hexad", points: 5 },
      { text: "Agree", primary: "Ennead", secondary: "Hexad", points: 4 },
      { text: "Neutral", primary: "Ennead", secondary: "Hexad", points: 3 },
      { text: "Disagree", primary: "Heptad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Heptad", secondary: null, points: 1 },
    ],
  },
  {
    id: 27,
    text: "Do you often advocate for fairness or justice in your community?",
    options: [
      { text: "Strongly Agree", primary: "Ennead", secondary: "Tetrad", points: 5 },
      { text: "Agree", primary: "Ennead", secondary: "Tetrad", points: 4 },
      { text: "Neutral", primary: "Ennead", secondary: "Tetrad", points: 3 },
      { text: "Disagree", primary: "Hexad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Hexad", secondary: null, points: 1 },
    ],
  },
  
  // Decad (10: The Completer)
  {
    id: 28,
    text: "Do you feel a strong drive to finish what you start?",
    options: [
      { text: "Strongly Agree", primary: "Decad", secondary: "Tetrad", points: 5 },
      { text: "Agree", primary: "Decad", secondary: "Tetrad", points: 4 },
      { text: "Neutral", primary: "Decad", secondary: "Tetrad", points: 3 },
      { text: "Disagree", primary: "Octad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Octad", secondary: null, points: 1 },
    ],
  },
  {
    id: 29,
    text: "Do you enjoy reflecting on your progress and celebrating milestones?",
    options: [
      { text: "Strongly Agree", primary: "Decad", secondary: "Ennead", points: 5 },
      { text: "Agree", primary: "Decad", secondary: "Ennead", points: 4 },
      { text: "Neutral", primary: "Decad", secondary: "Ennead", points: 3 },
      { text: "Disagree", primary: "Tetrad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Tetrad", secondary: null, points: 1 },
    ],
  },
  {
    id: 30,
    text: "Do you feel most satisfied when you achieve a sense of completion in your work?",
    options: [
      { text: "Strongly Agree", primary: "Decad", secondary: "Octad", points: 5 },
      { text: "Agree", primary: "Decad", secondary: "Octad", points: 4 },
      { text: "Neutral", primary: "Decad", secondary: "Octad", points: 3 },
      { text: "Disagree", primary: "Tetrad", secondary: null, points: 2 },
      { text: "Strongly Disagree", primary: "Tetrad", secondary: null, points: 1 },
    ],
  },
  
  ];
  
  export default questions;
  