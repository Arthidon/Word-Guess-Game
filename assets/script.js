// Create an Array of words

var lootWord = ["OilyRags", "AncientSword", "HolySymbol" ];

// Choose word randomly form array

var chosenWord = Math.floor(Math.random() * lootWord.length);
var chosenWord = lootWord[chosenWord];
console.log(chosenWord);


//underscores form chosen word will go here

//var underScore = "";
var underScore = [];

// Create Underscores based on word length

//function createUnderscore() {
    for (var i = 0; i < chosenWord.length; i++) 
    {
        underScore.push("_")
        //underScore = underScore + "_ ";
    }
    
//}

console.log(underScore);
// Get Users Guess
// Check users guess if right
// If right push to correct array
// If wrong push to wrong array