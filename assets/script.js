  // Set Global var based on JavaScript Best Practices.
  var countdownTimer
  var countdownValue 
  var questionNum

  //this is where the questions begin. you can add more by copy and pasting the code for the questions.
  var questions = [
// Question 1
{ question: "What is the Capital of Canada?", 
answers: [ "Ottawa", "Tokyo", "Washington D.C." ],
correct: "Ottawa" },
// Question 2
{ question: "Why is the sky blue?", 
answers: [ "If it was green we wouldn't know when to stop mowing", "God did it.", "It is due to the way visible light refracts on the composition of the atmosphere" ],
correct: "It is due to the way visible light refracts on the composition of the atmosphere" },
// Qestion 3
{ question: "What is the number that is the answer to life, the universe and everything", 
answers: [ "99", "42", "over 9000" ],
correct: "42" }
]


//The following is the timepiece. The stopwatch indicating the amount of time that is allocated for the test and the reset of said quiz.

//============BEGINING OF TIMEPIECE===============//

function startQuiz(){
  questionNum = 0  //Which question is it starting from?
  countdownValue = 0 // How much time are you giving people to take this quiz? This is measured in seconds (i.e. 60 = one minute). 
  countdownTimer = setInterval( timerDandD, 1000 ) //interval between seconds. 
  // switch back to the quizPage
 showPage( 'quizPage')
  showNextQuestion()
}
startQuiz()

function timerDandD( byValue=1 ){
  // decrease by the value passed in, or if nothing, by 1
  countdownValue += byValue
  document.querySelector('#countdown').textContent = countdownValue
  if( countdownValue<1 )
    finishLine()
}

function clockStop(event) {
  if( event ) event.preventDefault()
 //  stop the countdown
  clearInterval( countdownTimer )
 // get the amount of time that was done. 
//   show score page
  finishLine( 'scorePage' )
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
  clockStop(event)
}

//===========END OF QUESTION ENGINE==========//

//=========UI FUNCTIONS ==============//

function showPage( page ){
  // hide all pages
  document.querySelector('#quizPage').classList.add('d-none')
  document.querySelector(`#${page}`).classList.remove('d-none')
}


//=============THE FINISH LINE - How it will end (Scoreboard and reset the game==================//
  function finishLine( finalscore ){
    document.querySelector('#scorePage').classList.add('d-none')
    document.querySelector(`#${finalscore}`).classList.remove('d-none')
    
  }
  