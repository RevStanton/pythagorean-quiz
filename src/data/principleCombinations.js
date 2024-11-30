const principleCombinations = {
    Monad: {
      Monad: "Leadership thrives when rooted in confidence and independence.",
      Dyad: "Independent leadership balances well with harmony and compromise.",
      Triad: "Leadership flourishes when combined with creative communication and expression.",
      Tetrad: "Leadership thrives with structure, creating a strong foundation for success.",
      Pentad: "A strong sense of direction pairs well with an adventurous pursuit of knowledge.",
      Hexad: "Leadership with caregiving fosters a nurturing and supportive environment.",
      Heptad: "Purposeful leadership deepens with spiritual reflection and insight.",
      Octad: "Strategic thinking enhances independent leadership, driving long-term success.",
      Ennead: "Leadership rooted in purpose complements humanitarian efforts for collective well-being.",
      Decad: "A strong sense of leadership pairs perfectly with the drive to complete tasks thoroughly."
    },
    Dyad: {
      Monad: "Harmony gains strength when supported by confident and independent leadership.",
      Dyad: "Harmony and balance reinforce each other for sustained peace and cooperation.",
      Triad: "Harmony is enhanced through creative communication and innovative expression.",
      Tetrad: "Creating balance complements structured planning for smoother operations.",
      Pentad: "Seeking balance pairs with a desire for knowledge and new experiences.",
      Hexad: "Harmony aligns beautifully with caregiving to support others compassionately.",
      Heptad: "A harmonious nature benefits from deeper spiritual reflection and exploration.",
      Octad: "Harmony combined with strategy creates innovative and balanced solutions.",
      Ennead: "The drive for fairness and balance pairs with humanitarian values for collective good.",
      Decad: "A desire for harmony is enhanced by completing tasks with precision and care."
    },
    Triad: {
      Monad: "Creative expression gains direction through confident leadership.",
      Dyad: "Creativity and expression are balanced by harmony and cooperation.",
      Triad: "Creative communication reinforces itself, leading to innovative breakthroughs.",
      Tetrad: "Creative ideas flourish when structured within organized plans.",
      Pentad: "Creativity pairs well with curiosity and the pursuit of knowledge.",
      Hexad: "Creative expression is enriched by compassionate caregiving.",
      Heptad: "Creative communication deepens spiritual reflection and insight.",
      Octad: "Creative expression enhances strategic planning for future success.",
      Ennead: "Creativity and expression promote humanitarian values and fairness.",
      Decad: "Creative communication supports the completion of meaningful tasks."
    },
    Tetrad: {
      Monad: "Structure gains strength when complemented by confident leadership.",
      Dyad: "A structured approach blends well with creating harmony and balance.",
      Triad: "Structured planning benefits from creative thinking and expressive ideas.",
      Tetrad: "Structured thinking reinforces itself, creating a solid framework for success.",
      Pentad: "A structured mindset complements the pursuit of knowledge and adventure.",
      Hexad: "Organized caregiving creates an environment of order and compassion.",
      Heptad: "Structure benefits from the insight of spiritual and philosophical exploration.",
      Octad: "Organizational strategies are enhanced by long-term planning and structure.",
      Ennead: "A structured approach fosters fairness and humanitarian values.",
      Decad: "Clear planning and structure pair naturally with completing tasks thoroughly."
    },
    Pentad: {
      Monad: "Curiosity for knowledge is strengthened by leadership and independence.",
      Dyad: "The pursuit of knowledge aligns with harmony and balanced relationships.",
      Triad: "The pursuit of knowledge is energized by creativity and expressive communication.",
      Tetrad: "Exploration of new ideas benefits from a structured and organized approach.",
      Pentad: "Exploration and intellectual pursuits are balanced and self-reinforcing.",
      Hexad: "The search for understanding aligns with compassionate caregiving and support.",
      Heptad: "Curiosity pairs with spiritual insights to uncover life's deeper meanings.",
      Octad: "Exploration and strategy come together to create innovative opportunities.",
      Ennead: "The pursuit of knowledge fosters fairness and humanitarian goals.",
      Decad: "A desire for learning aligns with completing meaningful and impactful tasks."
    },
    Hexad: {
      Monad: "Caregiving gains strength when balanced by independent leadership.",
      Dyad: "Compassionate caregiving enhances harmony and balance in relationships.",
      Triad: "Compassionate caregiving is enriched by creative communication and expression.",
      Tetrad: "Caregiving paired with structure ensures sustainable support for others.",
      Pentad: "Nurturing others is complemented by a curiosity for learning and new experiences.",
      Hexad: "Caregiving complements itself, creating a nurturing and supportive cycle.",
      Heptad: "Caregiving is enriched by spiritual reflection and philosophical depth.",
      Octad: "Strategic caregiving ensures long-term and impactful support.",
      Ennead: "Caregiving and humanitarian values create a profound synergy of support and fairness.",
      Decad: "Compassionate caregiving aligns well with completing tasks for collective good."
    },
    Heptad: {
      Monad: "Spiritual reflection adds depth to confident and independent leadership.",
      Dyad: "Spiritual insights create harmony in relationships and balance in decisions.",
      Triad: "Spiritual reflection deepens through creative expression and communication.",
      Tetrad: "Spiritual depth pairs with structure to create meaningful and organized plans.",
      Pentad: "Reflection and curiosity combine to explore life's mysteries and challenges.",
      Hexad: "Spirituality and caregiving create a nurturing and insightful approach to support others.",
      Heptad: "Spiritual reflection deepens itself, fostering insight and personal growth.",
      Octad: "Strategic spiritual exploration aligns with long-term planning and purpose.",
      Ennead: "Spiritual insights foster fairness and a universal sense of humanity.",
      Decad: "Meaningful reflection aligns with the drive for completion and perfection."
    },
    Octad: {
      Monad: "Strategic planning gains strength when aligned with confident leadership.",
      Dyad: "A strategic approach benefits from balance and harmonious solutions.",
      Triad: "Strategic planning is invigorated by creative ideas and expressive communication.",
      Tetrad: "Long-term strategies thrive when supported by clear structure and organization.",
      Pentad: "Planning aligns well with curiosity and exploration of new opportunities.",
      Hexad: "Strategic planning paired with caregiving creates sustainable and impactful goals.",
      Heptad: "Strategic exploration benefits from spiritual insights and purpose.",
      Octad: "Strategic thinking reinforces itself, enhancing long-term success.",
      Ennead: "Strategic goals foster fairness and equitable outcomes for others.",
      Decad: "Strategic thinking and planning align naturally with completing tasks."
    },
    Ennead: {
      Monad: "Humanitarian values gain direction and strength through leadership.",
      Dyad: "Fairness and justice are enhanced by balance and harmonious solutions.",
      Triad: "Humanitarian efforts thrive with creative communication and innovative expression.",
      Tetrad: "Humanitarian goals benefit from structure and planning to achieve collective well-being.",
      Pentad: "A universal sense of fairness aligns with curiosity and the pursuit of knowledge.",
      Hexad: "Fairness aligns beautifully with compassionate caregiving for others.",
      Heptad: "Humanitarian values are deepened by spiritual and philosophical reflections.",
      Octad: "Fairness and justice are enhanced by strategic and long-term planning.",
      Ennead: "Fairness and equality reinforce themselves, creating collective harmony.",
      Decad: "Humanitarian values thrive when paired with the drive to complete meaningful tasks."
    },
    Decad: {
      Monad: "The drive for completion is strengthened by confident leadership.",
      Dyad: "Completing tasks is balanced by a harmonious and inclusive approach.",
      Triad: "The drive for completion is enhanced by creativity and expressive communication.",
      Tetrad: "Completeness aligns with structure and organization for impactful outcomes.",
      Pentad: "Completeness aligns with curiosity, fostering meaningful exploration.",
      Hexad: "A desire for completeness pairs with compassionate caregiving for others.",
      Heptad: "The pursuit of completion is enriched by meaningful spiritual reflection.",
      Octad: "Strategic thinking enhances the drive to complete tasks and achieve goals.",
      Ennead: "The drive for completion is enhanced by fairness and justice for collective well-being.",
      Decad: "The pursuit of perfection reinforces itself, driving the need to achieve more."
    }
  };

  export default principleCombinations;
  