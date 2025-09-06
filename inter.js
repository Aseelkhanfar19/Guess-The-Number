var choosenNumber; //the computer will choose the number
var rangeValues; // range of values
var guessedNumber; //player will guess the number
var attempts=5;  // the player have 5 attempts
var startGame = false; //did the game running or not
var searching=true; 

function main(){
    //will call all functions here
    startTheGame();

}

function startTheGame()
{
    //to start the game
    setTimeout(searchingForNumber,3000);
    

}

function searchingForNumber(){
    
    choosenNumber=Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    // alert(choosenNumber);
    dispalyTheTextBox();


}
function dispalyTheTextBox(){
    document.getElementById("progeress").innerHTML="Guess The Number Between 1-20";
    document.getElementById("contGuessBox").style.display="block";
    hideLoading();
}

function hideTheTextBox(){
    document.getElementById("contGuessBox").style.display="none";

}

function displayLoading(){
    document.getElementById("progeress").innerHTML="Choosing number";
    document.getElementById("boxChanging").style.display="inline";
    hideTheTextBox();

    

}

function hideLoading(){
    document.getElementById("boxChanging").style.display="none";

}



function guessTheNumber()
{
  guessedNumber=parseInt(document.getElementById("guessedNumBox").value);
}


function checkTheGuessedNum(event){
    if(event.key=="Enter"){
    //the computer will check the quessed number by user and decide if it too high of too low
    guessTheNumber();
    if(guessedNumber==choosenNumber)
    {
        document.getElementById("numLbl").innerHTML="Correct!!";
        document.getElementById("numLbl").style.color="green";
        setTimeout(function(){
        stopTheGame()
        startTheGame();},700);
    }
    else if(guessedNumber>choosenNumber && guessedNumber<choosenNumber+5)
    {

        document.getElementById("numLbl").innerHTML="close!";
        document.getElementById("numLbl").style.color="green";
        countTheAttempts();
    }
    else if(guessedNumber >= choosenNumber+5)
    {
         document.getElementById("numLbl").innerHTML="Too high";
        document.getElementById("numLbl").style.color="red";

         countTheAttempts();
    }
    else if(guessedNumber<choosenNumber && guessedNumber>choosenNumber-5 )
    {
        document.getElementById("numLbl").innerHTML="close!";
        document.getElementById("numLbl").style.color="green";
        countTheAttempts();
    }
    else if(guessedNumber<=choosenNumber-5)
    {
      document.getElementById("numLbl").innerHTML="Too low";
        document.getElementById("numLbl").style.color="red";

      countTheAttempts();
    }
    else{
        document.getElementById("numLbl").innerHTML="something went wrong , the number is "+choosenNumber;
        document.getElementById("numLbl").style.color="red";

    }

    }
}

function countTheAttempts()
{
    attempts--;
    document.getElementById("attmptLbl").innerHTML=attempts; 
    setTimeout(function(){
    if(attempts==0){
     document.getElementById("numLbl").innerHTML=" the number is "+choosenNumber+",<br>Game Over ";
     document.getElementById("numLbl").style.color="red";
    // setTimeout(stopTheGame,3000);
    }
    else{
        

    }
    },300);
}

function stopTheGame(){

    //stop the game
    attempts=5;
    document.getElementById("attmptLbl").innerHTML=attempts;
    document.getElementById("numLbl").innerHTML="";  
    document.getElementById("guessedNumBox").value="";
    displayLoading();
    startTheGame();


}




