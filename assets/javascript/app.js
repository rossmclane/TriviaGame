// Initializations
let timeLeft = 5;
let iterations = 0;
let gameDiv = $('#game');
let correct = 0;
let incorrect = 0;
let timeouts = 0;

// Create the Start Button
function startButtonView() {

    // Create new HTML Element and Styles
    const gameDiv = $('#game');
    // const newInstruction = $('<p>').text('Press Here to Start').css('text-align', "center").css('margin', "200px 0px 0px 0px");
    const newContainer = $('<div>').addClass('container').css('height', '100%');
    const newCol = $('<div>').addClass('col-8 offset-2 center-text h-100');

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
    startButtonView();
}

function initializeGame() {
    // Create new game with random questions
    let randomQuestion = generateRandomQuestions();
    promptView(randomQuestion[0].prompt, randomQuestion[0].possibleAnswers);

    // start timer
    let timerId1 = setInterval(function () {
        if (timeLeft === -1) {
            clearTimeout(timerId1);
            console.log('Time Out View')
            timeoutView(randomQuestion.correctAnswer);
        } else {
            $("#timer").text('Time Remaining: ' + timeLeft + 's');
            timeLeft--;
        }
    }, 1000);

};

function promptView(prompt, answerArray) {
    if (iterations === 0) {

        // Create Timer, Question Box, Column and Container
        let timerDiv = $('<div>').text('Time Remaining: 30s').css('text-align', 'center').css('margin', "100px 10px 0px 10px").attr('id', 'timer');
        let newQuestion = $('<div>').text(prompt).css('text-align', 'center').attr('id', 'newQuestion');
        let newCol = $('<div>').addClass('col-8 offset-2 h-100').attr('id', 'theCol');
        let newContainer = $('<div>').addClass('container').css('height', '100%').attr('id', 'gameContainer');

        // Create Buttons
        let ulTag = $('<ul>').css('text-align', 'center').css('padding', '20px').css('list-style-type', 'none').attr('id', 'myUl');
        let liTag1 = $('<li>').css('margin-top', '10px');
        let liTag2 = $('<li>').css('margin-top', '10px');
        let liTag3 = $('<li>').css('margin-top', '10px');
        let liTag4 = $('<li>').css('margin-top', '10px');
        let buttonOption1 = $('<button>').text(answerArray[0]).addClass('btn btn-primary').attr('id', 'button1');
        let buttonOption2 = $('<button>').text(answerArray[1]).addClass('btn btn-primary').attr('id', 'button2');
        let buttonOption3 = $('<button>').text(answerArray[2]).addClass('btn btn-primary').attr('id', 'button3');
        let buttonOption4 = $('<button>').text(answerArray[3]).addClass('btn btn-primary').attr('id', 'button4');

        // Create
        liTag1.append(buttonOption1);
        liTag2.append(buttonOption2);
        liTag3.append(buttonOption3);
        liTag3.append(buttonOption4);
        ulTag.append(liTag1);
        ulTag.append(liTag2);
        ulTag.append(liTag3);
        ulTag.append(liTag4);

        // Add to the DOM
        newCol.append(timerDiv);
        newCol.append(newQuestion);
        newCol.append(ulTag);
        newContainer.append(newCol);
        gameDiv.append(newContainer);

    } else {
        $('#newQuestion').text(prompt);
        $('#button1').text(answerArray[0]);
        $('#button2').text(answerArray[1]);
        $('#button3').text(answerArray[2]);
        $('#button4').text(answerArray[3]);
        $('#myUl').show();
    }
}

function timeoutView(answer) {
    timeouts++;
    $('#newQuestion').text('Out of Time!')
    $('ul').hide();
    let newDiv = $('<p>').text(`The Correct Answer was ${answer}`).css('text-align', 'center').attr('id','CorrectAnswer');
    $('#theCol').append(newDiv);

    // start timer
    timeLeft = 4;
    let timerId2 = setInterval(function () {
        if ((timeLeft === -1) && iterations < 5) {
            clearTimeout(timerId2);
            timeLeft = 30;
            initializeGame();
            newDiv.remove();
        } else {
            timeLeft--;
        }
    }, 1000);

    iterations++
    if (iterations === 5) {
        summaryView();
    }

}

function summaryView() {
    // $('ul').hide();
    $('#newQuestion').text(timeouts);
    $('#correctAnswer').hide();
    let restartButton = $('<button>').text('Restart?').on('click',function(){
        iterations = 0;
        timeLeft = 5;
        $('#myUl').show();
        initializeGame();
    });
    $('#theCol').append(restartButton).css('text-align','center');

}

restart();

// Still have to refactor the HTML/CSS
// Each functions should clear the previous HTML to create a blank slate