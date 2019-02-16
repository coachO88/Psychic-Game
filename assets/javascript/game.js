//Global Variables
//====================================================
//Create the Array containing NFL teams
var Team= ['chargers','chiefs','raiders','broncos','colts','titans','jaguars','texans',
'patriots','dolphins','jets','bills','ravens','bengals','steelers','browns','eagles','giants',
'cowboys','redskins','packers','lions','bears','vikings','buccaneers','falcons','panthers','saints',
'seahawks','rams','niners','cardinals'];
//Variables
var randTeam= "";
var rightTeam=[];
var wrongTeam=[];
var underScore= [];
var guesses=15;
var losses=0;
var wins= 0;
var correctLetter= 0;
var wrongLetter= 0;


//Main
function nflHangman(){
    guesses= 15;

    console.log(Team);
    console.log("Number of Teams:", Team.length);

    randTeam= Team[Math.floor(Math.random() * Team.length)]

    rightTeam= randTeam.split("");
    correctLetter= rightTeam.length;

    console.log(rightTeam);
    console.log("Number of letter:", rightTeam)


    for (var i = 0 ; i < correctLetter; i++){
       underScore.push('_')
       console.log(underScore)
    }

//DOM manipulation
document.getElementById("nflTeam").innerText= underScore.join(" ");
document.getElementById("win").innerHTML= wins;
document.getElementById("lose").innerHTML=losses;
document.getElementById("Guesses").innerHTML=guesses;
}

function scanLetter(letter){

    var letterInTeam = false;
        for(var i= 0; i < correctLetter; i++){
            console.log(i);
            console.log("Check Letter:", letter);
            if (rightTeam[i] === letter){
              letterInTeam=true;  
            }
            console.log("input", letter);
            console.log("array", letter[i]);
        }

        if(letterInTeam){
            for(var i= 0; i < correctLetter; i++){
                if(rightTeam[i]== letter){
                    underScore[i]= letter;
                    console.log(underScore);
                    console.log("check letter:", letter);
                    document.getElementById("nflTeam").innerText= underScore.join(" ");
                }
            } 
        }
        
        else{
            console.log("Wrong Letter:", letter);
            wrongTeam.push(letter);
            document.getElementById("correctLetters").innerText= wrongTeam;
            guesses--;
            document.getElementById("Guesses").innerHTML= guesses
}

if (randTeam== underScore.join("")){
    console.log(randTeam);
    console.log(underScore.join(""));
    document.getElementById("nflTeam").innerText= randTeam;
    console.log(underScore)
    var TeamName = randTeam;
    wins++;
} else {console.log("Not correct yet")};

if (guesses==0){
        var TeamName= randTeam;
        alert("You Do Not Know NFL Football Team, You Lose!! The Right Team is:"+ TeamName);
        losses++;
        startOver();
    }
}

function startOver(){
    underScore=[];
    wrongTeam=[];
    document.getElementById("correctLetters").innerText= wrongTeam;
    nflHangman();
}

document.onkeypress= function(event){
    var Input= event.key;
    console.log("Key Pressed:", Input);
    scanLetter(Input);
}
