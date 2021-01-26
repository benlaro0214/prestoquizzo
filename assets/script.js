  // Set Global var based on JavaScript Best Practices.
  
  var countDown
  var countdownValue 
  var questionPart
  var questions = [
// Question 1
{ question: "question goes here", 
answers: [ "answer1", "answer2", "answer3" ],
correct: "Answer1" },
// Question 2
{ question: "question goes here", 
answers: [ "answer1", "answer2", "answer3" ],
correct: "correctAnswer" },
// Qestion 3
{ question: "question goes here", 
answers: [ "answer1", "answer2", "answer3" ],
correct: "correctAnswer" },
//Question 4

{ question: "question goes here", 
answers: [ "answer1", "answer2", "answer3" ],
correct: "correctAnswer" },
//Question 5
{ question: "question goes here", 
answers: [ "answer1", "answer2", "answer3" ],
correct: "correctAnswer" },
]


// function start-line
function startLine(){

    function startQuiz(){
        questionNum = 0
        countdownValue = 60
        countdownTimer = setInterval( timerDecreaseAndDisplay, 1000 )
        // switch back to the quizPage
        showPage( 'quizPage' )
        showNextQuestion()
      }
      startLine()
}

// function questions

function questionPart()




// function timer
function countDown(){
time--;
tiermEL.text.Content=time;
}

//ticktock out of time
if (time <= 0) {
finishLine()

}

// function UI
function userInt(){


}

// function finish-line
function finishLine() {


}
