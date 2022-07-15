var readlineSync = require('readline-sync')

var score = 0;
var userName = readlineSync.question("what's your Name? ");

console.log("Welcome! " + userName + " to DO YOU KNOW jayanti? ");

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {                               //branching
    console.log("you are right! ");
    score++;
  }
  else {
    console.log("you are wrong! ");
  }

  console.log("current Score is: " + score)
  console.log("-------------");
}


//arrray of object

var questions = [{
  question: "Who is my superhero? ",
  answer: "superman",
},
{
  question: "Which is my favorite sad song? ",
  answer: "channa meraya"
},
{
  question: "where do I live? ",
  answer: "indore"
},
{
  question: "What is my age? ",
  answer: "21"
},
{
  question: "which is my favorite color? ",
  answer: "pink"
},
{
  question: "What is my date of birth? ",
  answer: "24 january 2001"
},
];

//for loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAAY! You Scored : ", score);
console.log("Thank you! for you gave your precious time to play this game! ")

//data of high scores
// var highScore = [
//   {
//     name : "jini" ,
//     score : 6 ,
//   },
//   {
//     name : "harshi" ,
//     score : 4 ,
//   },
// ];

// for(var j = 0; j<highScore.length;j++)
//   {
//     var currentScore = highscore[i];
    
//   }
// console.log(highScore.score);
//     console.log(currentScore.score);
//     console.log(highScore.score < currentScore.score);
