const quizDB = [
  {
    question: "1) Which type of JavaScript language is ___",

    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    ans: "ans2",
  },
  {
    question:
      "2) Which one of the following also known as Conditional Expression:",

    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    ans: "ans4",
  },
  {
    question: "3) In JavaScript, what is a block of statement",

    a: "Conditional block",
    b: "block that combines a number of statements into a single compound statement",
    c: "both conditional block and a single statemente",
    d: "block that contains a single statement",
    ans: "ans2",
  },
  {
    question:
      "4) When interpreter encounters an empty statements, what it will do:",

    a: "Shows a warning",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    ans: "ans4",
  },
  {
    question: "5)The 'function' and 'var' are known as:",

    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    ans: "ans3",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;
const showScore = document.getElementById("showScore");

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  const deselectAll = () => {
    answers.forEach((curAnsElem) => (curAnsElem.checked = false));
  };

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
      <h3> You scored ${score}/${quizDB.length}</h3>
      <button class ="btn" onclick="location.reload()">Play again</button>
      `;
    showScore.classList.remove("scoreArea");
    console.log(showScore);
  }
});
