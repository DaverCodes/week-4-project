var wordBlank = document.querySelector("");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");


var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


function init() {
    getWins();
    getlosses();
}
  
function startGame() {
    isWin = false;
    timerCount = 10;
}

function winGame() {
    // wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
}

function loseGame() {
    // wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
}


// add time deductions on lose
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
}


// Updates win count on screen and sets win count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
}
  

function getlosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
      loseCounter = 0;
    } else {
      loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}

function checkWin() {
    // If the word equals the blankLetters array when converted to string, set isWin to true
    if (chosenWord === blanksLetters.join("")) {
      // This value is used in the timer function to test if win condition is met
      isWin = true;
    }
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);




  
  


  
  
  




  