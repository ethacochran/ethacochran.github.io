/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  function gameItemMaker (elementId) {
    var gameItem = {}
      gameItem.id = elementId;
      gameItem.x = parseFloat($(elementId).css('left'));
      gameItem.y = parseFloat($(elementId).css('top'))
      gameItem.width = $(elementId).width()
      gameItem.height = $(elementId).height()
      gameItem.speedX = 0;
      gameItem.speedY = 0;
      
      return gameItem;
    
  }
var paddleLeft = gameItemMaker('#paddleLeft')
var paddleRight = gameItemMaker('#paddleRight')
var ball = gameItemMaker('#ball')
  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {
    $(document).on('keydown', moveDown)
    function moveDown () {
      if (event.which === KeyboardEvent.keydown ) {
        gameItem.speedY = -5
      }
    }
    $(document).on('keyup', moveUp)
    function moveUp () {
      if (event.which === KeyboardEvent.keyup) {
        gameItem.speedX = +5
      }
    }
    //Add handler function to move up (moveUp should be name of function)
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
