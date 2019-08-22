var underScore = [];
var chosenWord; // word bank (lootWord) array number = lootWord.[chosenWord]
var lootWord; // word bank
var hp = 10;
var wrongLetter = [];
var userGuess // this is the usre's input or event.key

// Create an Array of words
var lootWord = ["oilyrags", "ancientsword", "holysymbol" ];



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


console.log(underScore);




// Get Users Guess
document.onkeyup = function(event) {

    var userGuess = event.key;
    console.log(userGuess);
//looking for user guess in the index of chosenWord, if userGuess exists in index of chosenword value has to be over -1
    if(chosenWord.indexOf(userGuess) > -1)
    {
        console.log("yes");
    }
    //if user guess exists in chosenword - loop through
    


    else 
    {
        //else not above -1 pushing wrong "userGuess" to "wrongletter" array
        wrongLetter.push(userGuess);
        console.log(wrongLetter);
        //pushing wrong letter to "wrongGuess" div
        document.getElementById('wrongGuess').textContent = wrongLetter;
        //subtract hp
        hp--;
        console.log(hp);
    }

}


// Check users guess if right
// If right push to correct array
// If wrong push to wrong array