class Game {

    correct = 0;
    incorrect = 0;
    unanswered = 0;

    constructor(questionArray) {
        this.questionArray = questionArray;
    }
}

let questions = [

    {
        prompt: "How many Beatles were there?",
        possibleAnswers: ['1', '2', '3', '4'],
        correctAnswer: '4'
    },

    {
        prompt: "Who was the only non-member of the Beatles to receive a performance credit on a record?",
        possibleAnswers: ['Eric Clapton', 'Billy Preston', 'Ravi Shankar', 'Mick Jagger'],
        correctAnswer: 'Billy Preston'
    },

    {
        prompt: "John Lennon and Paul McCartney sang backing vocals on which Rolling Stones single?",
        possibleAnswers: ['I Want to Be Your Man', 'Satisfaction', 'We Love You', "Jumpin' Jack Fish"],
        correctAnswer: 'We Love You'
    },

    {
        prompt: "Who was the oldest Beatle?",
        possibleAnswers: ['John', 'Paul', 'George', "Ringo"],
        correctAnswer: 'Ringo'
    },

    {
        prompt: "The Beatles’ 1967 double A-side Strawberry Fields Forever/Penny Lane became their first single since Love Me Do in 1962 to fail to top the UK charts. What held it at number two?",
        possibleAnswers: ['A Whiter Shade of Pale by Procol Harum', 'Release Me by Engelbert Humperdinck', 'I’m a Believer by The Monkees', "This Is My Song by Petula Clark"],
        correctAnswer: 'Release Me by Engelbert Humperdinck'
    },

    {
        prompt: "Which of the following Beatles songs was not banned by the BBC?",
        possibleAnswers: ['I Am The Walrus', 'With A Little Help From My Friends', 'A Day In The Life', "Lucy In The Sky with Diamonds"],
        correctAnswer: 'With A Little Help From My Friends'
    },

    {
        prompt: "The Beatles got their MBEs in 1965. Which of them later returned his?",
        possibleAnswers: ['John', 'Paul', 'George', "Ringo"],
        correctAnswer: 'John'
    },

    {
        prompt: "Which was the first Beatles song to feature backwards vocals?",
        possibleAnswers: ["I'm Only Sleeping", 'Rain', 'Tomorrow Never Knows', "Strawberry Fields Forever"],
        correctAnswer: 'Rain'
    },

    {
        prompt: "Which of these is a Beatle middle name?",
        possibleAnswers: ['John', 'Paul', 'George', "Ringo"],
        correctAnswer: 'Paul'
    },

    {
        prompt: "When Ringo was hospitalised with tonsillitis on the eve of the Australasian tour in 1964, who replaced him on the road?",
        possibleAnswers: ['Pete Best', 'Jimmie Nicol', 'Andy White', "Tommy Moore"],
        correctAnswer: 'Jimmie Nicol'
    },

    {
        prompt: "What was the working title of the song yesterday?",
        possibleAnswers: ['Poached Eggs', 'Fried Eggs', 'Scrambled Eggs', "Hard-Boiled Eggs"],
        correctAnswer: 'Scrambled Eggs'
    }

    

]


function generateRandomQuestions(){
    const arr = [];
    while (arr.length < 1){
        let index = [Math.floor(Math.random() * questions.length)];
        if (!(arr.includes(questions[index]))) {arr.push(questions[index])};
    };

    return arr;
}