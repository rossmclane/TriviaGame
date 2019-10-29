// PseudoCode

// Initialize Variables
// - time, wins, losses, unanswered
let gameTime = 60;
const wins = 0;
const losses = 0;
const unanswered = 0;

// If a button with the start class is in the document
// set an event listener on that button
// event Listener - on click, renderGame

// function displayStart
// Show Start button

// displayStart on load
function renderStart() {
    let startButton = $("<button>")
        // translate these into adding a class
        .css('height', '100px')
        .css('width', '200px')
        .css('font-size', '30px')
        .text('Start').css('display', 'block')
        .css('margin', '0 auto').attr('id', 'start-button');

    $("#game").append(startButton);

    $("#start-button").on('click', function () {
        console.log('Render Game!');
        renderGame();
    })
}

renderStart();


// const question1 = $("<div>").text('Hello').css('text-align', 'center');
// $("#game").append(question1);

function renderGame() {
    // Remove the Start Button

    $("#game").empty();

    $("#game")

    for (question of questions) {
        
        let mcQuestion = $("<div>").addClass('question').css('text-align', 'center').css('margin-bottom','40px');
        let prompt = $("<div>").text(question.prompt);
        mcQuestion.append(prompt);

        for (let i = 0; i < 4; i++) {

            let label = $("<label class='radio-inline'>")
                .html(`<input type="radio" name="optradio"> ${question.possibleAnswers[i]}`)
                .css('font-size','14px').css('margin-right','20px');

            mcQuestion.append(label)
        }

        $('#game').append(mcQuestion);

    }

}

// Start by displaying the starting time, there is a one second delay
$("#timer").text(`You have ${gameTime} Seconds Left`);
interval = setInterval(function () {
    if (gameTime === 0) {
        console.log('End of Game!');
        // clear interval
        clearInterval(interval);
        // - renderResults
    } else {
        gameTime--;
        $("#timer").text(`You have ${gameTime} Seconds Left`);
    }

}, 1000);

// Counts down in increments of one second and each time 
// It finishes, it redisplays that part of the DOM
// At the end of the timer it ends the game and 
// Displays renderResults

// Initially renderGame
// Start Timer 

// function renderForm
// Displays all questions

// function renderResults
// Calculates results and renders them to the DOM

// Set click listener on Submit
// - Clears the questions and then displays the results