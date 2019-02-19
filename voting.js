//define opinion id's
const short = document.getElementById("opinion_short");
const long = document.getElementById("opinion_long")

//define variables
var question_number = 0;
var answers = [];
var final_score = [];


//onclick generates question innerHTML
function Start_survey(){
    showquestion();
}
function showquestion(){
    short.innerHTML = "test";
    long.innerHTML =  "test 2";
}



/* to do list
1: read up on basics
2: read up on innerHTML
3: make battleplan based on notes from maarten
4: make basic outline
5: make step by step plan to improve on outline
6: finalize 
7: touchups 

console.log(parties[7]);
// this reads all parties 
parties.forEach(e => console.log(e.name));





*/