const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function transform(s) {
  const transformed = s.split(" ");
  for (let i = 0; i < transformed.length; i++) {
    const start = transformed[i].charAt(0).toUpperCase();
    const end = transformed[i].substring(1, transformed[i].length);
    transformed[i] = `${start}${end}`;
  }
  return transformed.join(" ");
}

const titleCased = () => {
  return tutorials.map((tut) => transform(tut));
};
