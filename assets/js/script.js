// handle user input

function openForm() {
    document.getElementById("userInput").style.display ="block";
  }

// Quiz seciton

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// questions

const myQuestions = [
  {
    question: "What is a Latte?",
    answers: {
      a: "Espresso lengthened with water",
      b: "A shot of Espresso",
      c: "A single or double shot of espresso (1/3 of your drink), 2/3 of your drink is steamed milk with a small layer of frothed milk on top"
    },
    correctAnswer: "c"
  },
  {
    question: "What stimulant exists in coffee?",
    answers: {
      a: "Caffeine",
      b: "Nicotine",
      c: "Ginseng"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of these can be used to brew coffee?",
    answers: {
      a: "A pot",
      b: "A grinder",
      c: "A French Press",
    },
    correctAnswer: "c"
  },
  {
    question: "Which country is well known for producing coffee?",
    answers: {
      a: "Ireland",
      b: "Brazil",
      c: "Iceland",
    },
    correctAnswer: "b"
  },
  {
    question: "What is the measurement of espresso known as?",
    answers: {
      a: "A basket",
      b: "A bag",
      c: "A shot",
    },
    correctAnswer: "c"
  },
  {
    question: "What name is given to someone who makes and serves coffee to customers?",
    answers: {
      a: "A barista",
      b: "A brewer",
      c: "A baker"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the artwork placed on top of coffee drinks with steamed milk known by?",
    answers: {
      a: "Marble effect",
      b: "Milk Art",
      c: "Latte Art"
    },
    correctAnswer: "c"
  },
  {
    question: "What form does coffee need to exist in to brew with?",
    answers: {
      a: "Ground",
      b: "Wholebean",
      c: "Green",
    },
    correctAnswer: "a"
  },
  {
    question: "What effect is coffee known to have on your body?",
    answers: {
      a: "Helps you to fall asleep",
      b: "Causes you to feel more alert",
      c: "Helps with headache symptoms",
    },
    correctAnswer: "b"
  },
  {
    question: "Which of these is not a coffee drink?",
    answers: {
      a: "Espresso",
      b: "Cappuccino",
      c: "Matcha Latte",
    },
    correctAnswer: "c"
  }
];