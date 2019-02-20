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
    //short is title, long is statement
    short.innerHTML = "test";
    long.innerHTML =  "test 2";
}

/*counting function comes here

*/



