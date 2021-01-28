  // Set Global var based on JavaScript Best Practices.
  
  var countDown
  var countdownU 
  var questionNum
  
  //this is where the questions begin. you can add more by copy and pasting the code for the questions.
  var questions = [
// Question 1
{ question: "question goes here", 
answers: [ "answer1", "answer2", "answer3" ],
correct: "Answer1" },
// Question 2
{ question: "question goes here", 
answers: [ "answer4", "answer5", "answer6" ],
correct: "answer6" },
// Qestion 3
{ question: "question goes here", 
answers: [ "answer7", "answer8", "answer9" ],
correct: "answer8" }
]


//The following is the timepiece. The stopwatch indicating the amount of time that is allocated for the test and the reset of said quiz.

//============BEGINING OF TIMEPIECE===============//

function timerDandD( byValue=1 ){
  // decrease by the value passed in, or if nothing, by 1
  countdownValue -= byValue
  document.querySelector('#countdown').textContent = countdownValue
  if( countdownValue<1 )
    finishLine()
}

function startQuiz(){
  questionNum = 0  //Which question is it starting from?
  countdownValue = 20 // How much time are you giving people to take this quiz? This is measured in seconds (i.e. 60 = one minute). 
  countdownTimer = setInterval( timerDandD, 1000 ) //interval between seconds. 
  // switch back to the quizPage
 // showPage( 'quizPage' )
  //showNextQuestion()
}
startQuiz()

function clockStop(event) {
  if( event ) event.preventDefault()
 //  stop the countdown
  clearInterval( countdownTimer )
//   show score page
  showPage( 'scorePage' )
  }
  
  
//=============END OF TIMEPIECE=================//

//========BEGINNING OF QUESTION ENGINE==========//

function showNextQuestion(){
  var question = questions[questionNum]
  var questionEl = document.querySelector('#questionBox')
  // display question
  questionEl.innerHTML = `
    <div class="alert alert-warning"><h3>${question.question}</h3>
    `
  // loop through and show each answer as a button
  for( var i=0; i < question.answers.length; i++ ){
    var answer = question.answers[i]
    questionEl.innerHTML += `
    <button onClick="selectAnswer(event,'${answer}')" class="btn btn-secondary btn-block">${answer}</button>
    `
  }
}

function selectAnswer( event,answer ){
  event.preventDefault()
  console.log( `question answer id: ${answer}` )
  if( answer===questions[questionNum].correct ){
  } else {
     timerDecreaseAndDisplay(10)
  }
  questionNum++
  // decide to show next question (if more), else end quiz
  if( questionNum<questions.length )
    showNextQuestion()
  else
    finishQuiz()
}

//===========END OF QUESTION ENGINE==========//

//=========UI FUNCTIONS ==============//

function showPage( page ){
  // hide all pages
  document.querySelector('#quizPage').classList.add('d-none')
  document.querySelector('#scorePage').classList.add('d-none')
  // show selected page
  document.querySelector(`#${page}`).classList.remove('d-none')
}

// The finish line - How it will end (Scoreboard and reset the game.)
  function finishQuiz(event){
    if( event ) event.preventDefault()
      // stop the countdown
    clearInterval( countdownTimer )
    // show score page
    showPage( 'scorePage' )}