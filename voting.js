//define opinion id's
const short = document.getElementById("opinion_short");
const long = document.getElementById("opinion_long")

//define variables
var question_number = 0;
var answers = [];
var finalAnswer = [];

//onclick generates question innerHTML
function Start_survey(){
    showquestion();
    //TODO make start button dissapear on onclick
}
function showquestion(){
    //short is title, long is statement
    short.innerHTML = subjects[question_number].title;
    long.innerHTML =  subjects[question_number].statement;
}

//AddAnswer saves answer in array
function AddAnswer(answer, MoreLess){
    answers[question_number] = answer;
    console.log(answer);
    NextQuestion(MoreLess)
}

//needs to go next on pro, ambivalent, and null 
function NextQuestion(counter){
    if (subjects[question_number]) {
     if (counter == 'next') {
         question_number++;
         showquestion();
         //needs to wipe previous choice, look up splice
     } else if(counter == 'previous' && question_number != 0)  {
         question_number--
         showquestion();
     }   
    }
}

//final counter goes here