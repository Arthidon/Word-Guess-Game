var underScore = [];
var chosenWord; // word bank (lootWord) array number = lootWord.[chosenWord]
var lootWord; // word bank
var hp = 10;
var wrongLetter = [];
var correctLetter = [];
var userGuess // this is the usre's input or event.key
var winCounter = 0;
// Create an Array of words
var lootWord = ["oily rags", "ancient sword", "holy symbol" ];

var chosenWord = start();




function start() {
// Choose word randomly from array
var chosenWord = Math.floor(Math.random() * lootWord.length);
//chosenWord = array.index number
var chosenWord = lootWord[chosenWord];


//logs chosen word
console.log(chosenWord);

//underscores from chosen word will go here
var underScore = [];

// Create Underscores based on chosenword length
    for (var i = 0; i < chosenWord.length; i++) 
    {
        //if chosen word [i] equals a space push a space to underscore, else push underscore
        if( chosenWord[i] === " ") 
        {
            underScore.push(" ");
        }
        else 
        {
        underScore.push("_");
        }

    }
    //places underscores on HTML page > ID pageunderscore
     document.getElementById('pageunderscore').textContent = underScore.join(" ");

     console.log(underScore);
    return chosenWord;

}




//win and lose function

 function winLose() {

    if (winCounter === chosenWord.length) {
        alert("Yay Loot!");
        start();
    }
    else if(hp === 0){
        alert('your dead :(...');
        start();
    }
 }




// Get Users Guess
document.onkeyup = function(event) {

    var userGuess = event.key;
    //logs user guess
    console.log(userGuess);


//looking for user guess in the index of chosenWord, if userGuess exists in index of chosenword value has to be over -1
    if(chosenWord.indexOf(userGuess) > -1)
    {
        
        //logging yes if userGuess = something in the Index of chosen word
        console.log("yes");

            //if user guess exists in chosenword - loop through
            for (var i = 0; i < chosenWord.length; i++) 
        {



    


            //if index variable (i) of chosenWord = to userguess 
            if(chosenWord[i] === userGuess) 
            {
                
                //then go to index (i) of underScore and replace it with userGuess
                underScore[i] = userGuess;         
                
                
                
                //adds to win counter
                winCounter++;
                winLose();
                
                

                //This pushes correct user guess to html ID "correctGuess"
                correctLetter.push(userGuess);
                document.getElementById('correctGuess').textContent = correctLetter.join(" ");
        
            }

            //if chosen word [i] equals a space push a space to underscore, else push underscore
            else if( chosenWord[i] === " ") 
            {
                underScore.push(" ");
            }
            else 
            {
            underScore.push("_");
            } 
            
    //placed underscore on page
    document.getElementById('pageunderscore').textContent = underScore.join(" ");


        }




    //shows correct guesses in underscore log
    console.log(underScore);
    



        
    }


    else
    {
        //else not above -1 pushing wrong "userGuess" to "wrongletter" array
        wrongLetter.push(userGuess);
        console.log(wrongLetter);
        //pushing wrong letter to "wrongGuess" div
        document.getElementById('wrongGuess').textContent = wrongLetter.join(" ");
        
        
        //subtract hp
        hp--;
        winLose();

        console.log(hp);
        document.getElementById('hp').textContent = hp;
    }

}


// Check users guess if right
// If right push to correct array
// If wrong push to wrong array

//need to solve spaces for user
//need to set variable on function