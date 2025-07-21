let next = document.querySelector(".next");
let pre = document.querySelector(".previous");
let ques = document.querySelector(".question");
let ans = document.querySelectorAll(".ans");
let score = document.querySelector(".score");
let option = document.querySelectorAll(".option");
let quiz = document.querySelector(".quiz");
let i = 0;
let y = 0;

let questions = [
  {
    question: "What is the result of typeof NaN?",
    options: ["number", "object", "NaN"],
    answer: "NaN",
  },
  {
    question: "Which one is a correct arrow function?",
    options: [
      "( ) => { return 5 }",
      "( ) -> { return 5 }",
      "function =>( ) { }",
    ],
    answer: "( ) => { return 5 }",
  },
  {
    question: "What is hoisting?",
    options: [
      "Compressing the code",
      "Moving declarations to the top of the scope",
      "Pausing timeout functions",
    ],
    answer: "Moving declarations to the top of the scope",
  },
  {
    question: "What does = = = do?",
    options: [
      "Checks if a DOM element exists",
      "Always acts like = =",
      "Compares both value and type",
    ],
    answer: "Compares both value and type",
  },
  {
    question: "Which one prevents the default action of an element?",
    options: [
      "stopPropagation( )",
      "event.preventDefault( )",
      "event.stopDefault( )",
    ],
    answer: "event.preventDefault( )",
  },
];

function displayQuestion() {
  ques.textContent = questions[i].question;
  for (let x = 0; x < questions[i].options.length; x++) {
    ans[x].textContent = questions[i].options[x];
    option[x].checked = false;
    ans[x].style.cssText = "background: white; color:black;";
  }
}
window.addEventListener("load", displayQuestion());

next.addEventListener("click", () => {
  if (i < questions.length - 1) {
    i++;
    displayQuestion();
  }
});
pre.addEventListener("click", () => {
  if (i > 0) {
    i--;
    displayQuestion();
  }
});

for (let e = 0; e < option.length; e++) {
  option[e].addEventListener("change", () => {
    if (option[e].checked && ans[e].textContent === questions[i].answer) {
      ans[e].style.cssText = "background: green; color:white;";
      score.textContent = `Total Result = ${++y}/${questions.length}`;
    } else {
      ans[e].style.cssText = "background: red; color:white;";
    }
  });
}
