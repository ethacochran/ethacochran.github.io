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
                         // change 'eventType' to the type of event you want to handle

  $(document).on('keydown', handleKeyDown)
  $(document).on('keyup', handleKeyUp)
  startBall();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveObject(paddleLeft);
    moveObject(paddleRight);
    moveObject(ball);

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown (event) {
    var keycode = event.which
    if (keycode === KEYCODE.keyW) {
      paddleRight.speedY = +5
    }
    if (keycode === KEYCODE.keyS) {
      paddleRight.speedY = -5
    }
    if (keycode === KEYCODE.UpArrow) {
      paddleLeft.speedY = +5
    }
    if (keycode === KEYCODE.DownArrow) {
      paddleLeft.speedY = -5
    }
  }
  function handleKeyUp (event) {
    var keycode = event.which
    if (keycode === KEYCODE.keyW) {
      paddleRight.speedY = 0
    }
    if (keycode === KEYCODE.keyS) {
      paddleRight.speedY = 0
    }
    if (keycode === KEYCODE.UpArrow) {
      paddleLeft.speedY = 0
    }
    if (keycode === KEYCODE.DownArrow) {
      paddleLeft.speedY = 0
    }
  }
  
   
    var KEYCODE = {
      keyW: 87,
      keyS: 83,
      UpArrow: 38,
      DownArrow: 40
    }
    //Add handler function to move up (moveUp should be name of function)


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function moveObject (obj) {
    obj.x = obj.x + obj.speedX
    obj.y = obj.y + obj.speedY
    $(obj.id).css('left', obj.x)
    $(obj.id).css('top', obj.y)
  }
  function startBall () {
    ball.x = 0
    ball.y = 0
    ball.speedX = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
