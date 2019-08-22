var underScore = [];
var chosenWord; // word bank (lootWord) array number = lootWord.[chosenWord]
var lootWord; // word bank
var hp = 0;
var wrongLetter = [];

// Create an Array of words
var lootWord = ["oilyrags", "ancientsword", "holysymbol" ];

//start game fuction:::::::::::
function startGame() {
// Choose word randomly from array
var chosenWord = Math.floor(Math.random() * lootWord.length);
//chosenWord = array.index number
var chosenWord = lootWord[chosenWord];

console.log(chosenWord);

//underscores from chosen word will go here
var underScore = [];

// Create Underscores based on word length
    for (var i = 0; i < chosenWord.length; i++) 
    {
        underScore.push("_");
    }
    //places underscores on HTML page > ID pageunderscore
     document.getElementById('pageunderscore').textContent = underScore.join(" ");

}
console.log(underScore);

document.onkeyup = function(event) {

var userGuess = event.key;
console.log(userGuess);
}

// Get Users Guess
// Check users guess if right
// If right push to correct array
// If wrong push to wrong array