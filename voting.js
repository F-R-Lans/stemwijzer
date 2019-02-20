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
    //TODO make start button dissapear on onclick
}
function showquestion(){
    //short is title, long is statement
    short.innerHTML = subjects[question_number].title;
    long.innerHTML =  subjects[question_number].statement;
}

//AddAnswer saves answer in array
function AddAnswer(answer, counter){
    answers[question_number] = answer;
    NextQuestion(counter)
}

function NextQuestion(counter){
    if (subjects[question_number]) {
     if (counter == 'next') {
         question_number++
         showquestion()
     } else if(counter == 'previous')  {
         question_number--
         showquestion()
     }   
    }
}


/*
TODO back function? not sure if it need to go in for loop
*/

/* 
example of data.js object
var subjects = [{
    "title": "Bindend referendum",
    "statement": "Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.",
    "parties": [{
            "name": "PVV",
            "position": "pro",
            "explanation": "Geen toelichting gegeven"
        },

*/ 