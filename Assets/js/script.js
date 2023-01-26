
let questions = [
  {
    question: "Commonly used data types DO NOT include:?",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },

  {
    question:
      "The condition in an if / else statement is enclosed within ___.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parenthesis", correct: true },
      { text: "square brackets", correct: false },
    ],
  },

  {
    question: "Arrays in JavaScript can be used to store ___.",
    answers: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },

  {
    question: "String values must be enclosed within ___ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parentheses", correct: false },
    ],
  },

  {
    question: "a very useful tool used during development and debugging got printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal / bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console log", correct: true },
    ],
  },
];

//maybemaybe
//works- needs to switch to end game screen
//moved form class into function-not operating yet
function nextQuestion() {
  if (index >= questions.length - 1) {
    endgame();
    return
    form.classList.remove("hidden");
  }
  else{
    clearPage();
    index++
  }  
}

//works- needs to switch to end game screen
