var underScore = [];
var chosenWord; // word bank (lootWord) array number = lootWord.[chosenWord]
var lootWord; // word bank
var hp = 10;
var wrongLetter = [];
var nonDupWrong = []
var correctLetter = [];
var userGuess; // this is the usre's input or event.key
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

// Create Underscores based on chosenword length
    for (var i = 0; i < chosenWord.length; i++) 
    {
        //if chosen word [i] equals a space push a space to underscore, else push underscore
        if( chosenWord[i] === " ") 
        {
            underScore[i] = " ";
        }
        else 
        {
            underScore[i] = "_ ";
        }
        console.log(underScore[i]);
        document.getElementById('pageunderscore').textContent += underScore[i];
    }
    //places underscores on HTML page > ID pageunderscore

    console.log(underScore);
    return chosenWord;

}




//win and lose function

 function winLose() {
    console.log(chosenWord);
    console.log(document.getElementById('pageunderscore').innerHTML);
    if (chosenWord == document.getElementById('pageunderscore').innerHTML) {
        alert("Yay Loot!");
        winCounter++;
        document.getElementById('score').textContent = winCounter;

        location.reload();
        start();
        
    }
    else if(hp === 0){
        alert('your dead :(...');
        location.reload();
    }
 }

// Get Users Guess
document.onkeyup = function(event) {

    var userGuess = event.key;
    //logs user guess
    console.log(userGuess);
    console.log(underScore);


//looking for user guess in the index of chosenWord, if userGuess exists in index of chosenword value has to be over -1
    if(chosenWord.indexOf(userGuess) > -1)
    {
        document.getElementById('pageunderscore').textContent = "";
        //logging yes if userGuess = something in the Index of chosen word
        console.log("yes");

            //if user guess exists in chosenword - loop through
            for (var i = 0; i < chosenWord.length; i++){


            // if( chosenWord[i] === " ") 
            // {
            //     underScore = (" ");
            // }
            // else 
            // {
            // underScore = ("_");
            // }
            

            //if index variable (i) of chosenWord = to userguess 
            if(chosenWord[i] === userGuess) 
            {
                //then go to index (i) of underScore and replace it with userGuess
                
                underScore[i] = userGuess;         
                
                //adds to win counter
                
                
                
                
                //This pushes correct user guess to html ID "correctGuess"
                correctLetter.push(userGuess);
                document.getElementById('correctGuess').textContent = correctLetter.join(" ");
                
            }
            console.log(underScore);
            document.getElementById('pageunderscore').textContent += underScore[i];
            
            
            //placed underscore on page
            
            
        }
        
          
        //shows correct guesses in underscore log
        console.log(underScore);
        
        
    } else {
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
    
    winLose();
    
}


// Check users guess if right
// If right push to correct array
// If wrong push to wrong array

//need to solve spaces for user
//need to set variable on function