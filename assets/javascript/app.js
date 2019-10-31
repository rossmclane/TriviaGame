// PseudoCode

// To Dos
// - Make it slightly prettier
// - Add a readme

// Initialize Variables
let gameTime = 30;
let wins = 0;
let losses = 0;
let unanswered = 0;

// start the game
renderStart();

function renderStart() {

    const startButton = $("<button>")
        .text('Start')
        .addClass('buttonClass')
        .on('click', function () {
            renderGame();
        })

    $("#game").append(startButton);
}

function renderGame() {

    $("#game").empty();

    // Initialize Timer
    let timer = $("<div>").text(`You have ${gameTime} Seconds Left`)
        .css('text-align', 'center')
        .css('margin-bottom', '50px')

    $("#game").append(timer);

    interval = setInterval(function () {
        if (gameTime === 0) {
            console.log('End of Game!');
            // clear interval
            clearInterval(interval);
            calculateResults();
            renderResults();
        } else {
            gameTime--;
            timer.text(`You have ${gameTime} Seconds Left`);
        }

    }, 1000);

    // For each question, render the question to the DOM
    for ([questionNumber, question] of questions.entries()) {

        let mcQuestion = $("<div>").addClass('question');
        let prompt = $("<div>").text(question.prompt);
        mcQuestion.append(prompt);

        for (let i = 0; i < 4; i++) {

            let label = $("<label class='radio-inline'>")
                .html(`<input type="radio" name="${questionNumber}" value='${question.possibleAnswers[i]}'> ${question.possibleAnswers[i]}`)
                .css('font-size', '14px').css('margin-right', '20px');

            mcQuestion.append(label)
        }

        $('#game').append(mcQuestion);
    }

    // Render Done Button and attach click listener to render results
    const doneButton = $("<button>").text('Done').addClass('buttonClass');

    doneButton.on('click', function () {
        clearInterval(interval);
        calculateResults();
        renderResults();
    })

    $("#game").append(doneButton);

}

function calculateResults() {

    // for each question
    for (let i = 0; i < questions.length; i++) {

        // get all answer choices
        let possibleAnswers = $(`[name="${i}"]`);

        // set default answered state to false
        let answered = false;

        for (answer of possibleAnswers) {

            // if answer is checked
            if ($(answer).is(':checked')) {

                answered = true;

                if ($(answer).val() === questions[i].correctAnswer) {
                    wins++
                } else {
                    losses++;
                }
            }
        }

        if (!answered) {
            unanswered++;
        }

    }

}

function renderResults() {

    $("#game").empty();

    const resultsDiv = $("<div>");

    const h1Tag = $("<h1 class='title'>").text("All Done!").css('font-size', '30px');
    const winsDisplay = $("<p>").text(`Wins: ${wins}`).css('text-align', 'center');
    const lossesDisplay = $("<p>").text(`Losses: ${losses}`).css('text-align', 'center');
    const unansweredDisplay = $("<p>").text(`Unanswered: ${unanswered}`).css('text-align', 'center');

    resultsDiv.append(h1Tag, winsDisplay, lossesDisplay, unansweredDisplay);

    $("#game").append(resultsDiv);

}