
//variables//
var incorrectLetter = document.getElementById("incorrect").childNodes[0];
var computerWord = ["h", "o", "m", "e"];
var computerWord2 = ["f", "i", "r", "e"];

//functions//
document.onkeyup = function(event) {
    var userGuess = event.key;

function goodChoice() {
    if (userGuess === "h") {
    var correctLetter = document.getElementById("correct").childNodes[0];
    var textNode = document.createTextNode(userGuess);
    correctLetter.replaceChild(textNode, correctLetter.childNodes[0]);
    }
    else if (userGuess === "o") {
        var correctLetter = document.getElementById("correct").childNodes[0,1];
        var textNode = document.createTextNode(userGuess);
        correctLetter.replaceChild(textNode, correctLetter.childNodes[0]); 
    }
    else if (userGuess === "m") {
        var correctLetter = document.getElementById("correct").childNodes[0,1,2];
        var textNode = document.createTextNode(userGuess);
        correctLetter.replaceChild(textNode, correctLetter.childNodes[0]); 
    }
    else if (userGuess === "e") {
        var correctLetter = document.getElementById("correct").childNodes[0,1,2,3];
        var textNode = document.createTextNode(userGuess);
        correctLetter.replaceChild(textNode, correctLetter.childNodes[0]); 
    }
};

function badChoice() {
    var badNode = document.createTextNode(userGuess);
    incorrectLetter.appendChild(badNode, incorrectLetter.childNodes[0]);
};
//conditionals//
    if ((userGuess === computerWord[0]) || (userGuess === computerWord[1]) || 
        (userGuess === computerWord[2]) || (userGuess === computerWord[3])) {
        console.log("correct" + " " + userGuess);
        goodChoice(userGuess);
    }
    else if ((userGuess !== computerWord[0]) || (userGuess !== computerWord[1]) ||
             (userGuess !== computerWord[2]) || (userGuess !== computerWord[3]))
    {
        console.log("incorrect" + " " + userGuess);
        badChoice(userGuess);
    }

};


