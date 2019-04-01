// I struggled with this assignment, this first section is hardcoded. it is functional but does not 
// cycle a new word. the commented section below is my attempt at generating several words.
var incorrectLetter = document.getElementById("incorrect").childNodes[0];
var counter = 0;
var computerWord = ["h","o","m","e"];


document.onkeyup = function(event) {
    if (counter === 3){
        var correctLetter = document.getElementById("correct");
    while (correctLetter.firstChild) {
        correctLetter.removeChild(correctLetter.firstChild);
    }
        var newLetter = document.createElement("h1");
        newLetter.textContent = "HOME------YOU WIN!!";
        correctLetter.appendChild(newLetter);
        console.log("WIN");
    }   
    else {
    var userGuess = event.key;
    
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

function goodChoice() {

    if (userGuess === "h") {
    var correctLetter = document.getElementById("correct").childNodes[0];
    var textNode = document.createTextNode(userGuess);
    correctLetter.replaceChild(textNode, correctLetter.childNodes[0]);
    counter++;
    }
    else if (userGuess === "o") {
        var correctLetter = document.getElementById("correct").childNodes[0,1];
        var textNode = document.createTextNode(userGuess);
        correctLetter.replaceChild(textNode, correctLetter.childNodes[0]);
        counter++; 
    }
    else if (userGuess === "m") {
        var correctLetter = document.getElementById("correct").childNodes[0,1,2];
        var textNode = document.createTextNode(userGuess);
        correctLetter.replaceChild(textNode, correctLetter.childNodes[0]);
        counter++; 
    }
    else if (userGuess === "e") {
        var correctLetter = document.getElementById("correct").childNodes[0,1,2,3];
        var textNode = document.createTextNode(userGuess);
        correctLetter.replaceChild(textNode, correctLetter.childNodes[0]);
        counter++; 
    }

};
function badChoice() {
    var badNode = document.createTextNode(userGuess);
    incorrectLetter.appendChild(badNode, incorrectLetter.childNodes[0]);
};
  
}

};



// //global variables
// var computerWords = ["home","machine","hammer"];
// var answerArray = [];
// var underScore = [];

// //generates random word form computerWords array
// var word = computerWords[Math.floor(Math.random() * computerWords.length)];
// console.log(word);

// //turns each character of chosen word into an underscore and pushes letters to answerArray and populates html
// function generateUnderscores () {
//     for (var i = 0; i < word.length; i++) {
//         underScore[i] = "_";
//         answerArray.push(word[i]);
//    }
//     var correctLetter = document.getElementById("correct");
//     correctLetter.textContent = underScore;
// };
// generateUnderscores();
// console.log(underScore);
// console.log(answerArray);

// //user key stroke begins this function
// document.onkeyup = function(event){
//     userGuess = event.key;
//     userGuess = userGuess.toLowerCase();

//     //function called if choice is invalid and populates appropriate html
//     function badChoice() {
//         var incorrectLetter = document.getElementById("incorrect");
//         newElement = document.createElement("span");
//         newElement.textContent = userGuess;
//         incorrectLetter.appendChild(newElement);
//     };

//     for (j = 0; j < answerArray.length; j++) {
//         badLetter = answerArray[j];
//         if (badLetter !== userGuess) {
//             badChoice(userGuess);
//             break;
//         }
//     }
  
//     let result = answerArray.find(function(elem) {
//         return elem === userGuess;
//     });
//     answerArray.push(result);
    
    
// }



