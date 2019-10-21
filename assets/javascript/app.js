// Initializations
let timeLeft = 30;

// All Possible Questions
// Try importing in this data structure
// questionArray = []

// Create the Start Button
function createStartButton() {

    // Create new HTML Element and Styles
    const gameDiv = $('#game');
    // const newInstruction = $('<p>').text('Press Here to Start').css('text-align', "center").css('margin', "200px 0px 0px 0px");
    const newContainer = $('<div>').addClass('container').css('height', '100%');
    const newCol = $('<div>').addClass('col-4 offset-4 center-text h-100');

    let ulTag = $('<ul>').css('list-style-type', 'none').css('margin', "200px 0px 0px 0px");
    let liTag1 = $('<li>');
    let buttonOption1 = $('<button>').text('Start').addClass('btn btn-primary');
    liTag1.append(buttonOption1);
    ulTag.append(liTag1);

    // Add a Click Listener
    buttonOption1.on('click', function () {
        newContainer.remove();
        initializeGame();

    });

    // Add to the DOM
    // newCol.append(newInstruction);
    newCol.append(ulTag);
    newContainer.append(newCol);
    gameDiv.append(newContainer);

}

function restart() {
    // Erase other things
    createStartButton();
}

function initializeGame() {
    // Question Screen
    let gameDiv = $('#game');
    let timerDiv = $('<div>').text('Time Remaining: 30s').css('text-align', 'center').css('margin', "100px 10px 0px 10px");
    let newQuestion = $('<div>').text('What is this?').css('text-align', 'center');
    const newCol = $('<div>').addClass('col-4 offset-4 h-100');
    const newContainer = $('<div>').addClass('container').css('height', '100%');

    let ulTag = $('<ul>').css('text-align', 'center').css('padding', '40px').css('list-style-type', 'none');
    let liTag1 = $('<li>').css('margin-top', '10px');
    let liTag2 = $('<li>').css('margin-top', '10px');
    let liTag3 = $('<li>').css('margin-top', '10px');
    let buttonOption1 = $('<button>').text('Option 1').addClass('btn btn-primary');
    let buttonOption2 = $('<button>').text('Option 2').addClass('btn btn-primary');
    let buttonOption3 = $('<button>').text('Option 3').addClass('btn btn-primary');
    liTag1.append(buttonOption1);
    liTag2.append(buttonOption2);
    liTag3.append(buttonOption3);
    ulTag.append(liTag1);
    ulTag.append(liTag2);
    ulTag.append(liTag3);

    // Add to the DOM
    newCol.append(timerDiv);
    newCol.append(newQuestion);
    newCol.append(ulTag);
    newContainer.append(newCol);
    gameDiv.append(newContainer);

    // start timer
    const timerId = setInterval(countdown, 1000);
    
    function countdown() {
        if (timeLeft == 0) {
          clearTimeout(timerId);
        //   doSomething();
        } else {
          timerDiv.text('Time Remaining: ' + timeLeft + 's');
          timeLeft--;
        }
      }

}

restart();