//Global Variables
//====================================================
//Create the Array containing NFL teams
const Team= ['Chargers','Chiefs','Raiders','Broncos','Colts','Titans','Jaguars','Texans',
'Patriots','Dolphins','Jets','Bills','Ravens','Bengals','Steelers','Browns','Eagles','Giants',
'Cowboys','Redskins','Packers','Lions','Bears','Vikings','Buccaneers','Falcons','Panthers','Saints',
'Seahawks','Rams','Niners','Cardinals'];
//Choose Team Randomly
var randTeam= Math.floor(Math.random() * Team.length);
var choosenTeam= Team[randTeam];
var rightTeam=[];
var wrongTeam=[];
var underScore= [];

//DOM manipulation
var docUnderScore= document.getElementsByClassName('underscore');
var docRightGuess= document.getElementsByClassName('rightGuess');
var docWrongGuess= document.getElementsByClassName('wrongGuess');
//Main
//==================================================
console.log(choosenTeam);

//Make Underscores based on the Length of team name
function makeUnderScore() {
    for (var i = 0 ; i < choosenTeam.length; i++){
       underScore.push('_');
    }
    return underScore;
}
console.log(makeUnderScore());
// docUnderScore[0].innerHTML= underScore.join(' ');

//Get the letter Guess from user
document.addEventListener('keypress', (event) =>{
    var keyword= String.fromCharCode(event.keyCode);
//Check if the guess is right
for(var i=0; i < choosenTeam.length; i++){
    if(keyword===choosenTeam[i]){
        rightTeam.push(keyword);
    }
}
/*if(choosenTeam.indexOf(keyword) > -1){
//If right, push to right guess array
rightTeam.push(keyword);*/

//Replace underScore with correct letter
underScore[choosenTeam.indexOf(keyword)]= keyword;
console.log(underScore);
docUnderScore[0].innerHTML= underScore.join(' ');
docRightGuess[0].innerHTML += rightTeam;
//Checks to see if user word matches guesses
console.log(docUnderScore);
if (docUnderScore[0].innerHTML == choosenTeam){
    alert('You Win');
    
}
else{
    wrongTeam.push(keyword);
    console.log(wrongTeam);
    docWrongGuess[0].innerHTML += wrongTeam;
}
});
 
//docUnderScore["0"].innerHTML= makeUnderScore().join(' ');

