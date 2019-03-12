//define opinion id's
const short = document.getElementById("opinion_short");
const long = document.getElementById("opinion_long")

//define variables
var question_number = 0;
var answers = [];
var final_results = [];
for(var r = 0; r<parties.length; r++) {
    final_results[r]={"name":parties[r].name, "points":0}; 
} console.log(final_results);

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
    console.log(answers);
    NextQuestion(MoreLess)
}

//needs to go next on pro, ambivalent, and null 
function NextQuestion(counter){
    if (subjects[question_number]) {
     if (counter == 'next' && question_number != subjects.length - 1) {
         question_number++;
         showquestion();
         //needs to wipe previous choice, look up splice
     } else if(counter == 'previous' && question_number != 0)  {
         question_number--
         showquestion();
     }   else if(counter == 'next' && question_number != subjects.length){
         calc_results();
     }
    }
}

function calc_results(){
    for(var z = 0; z<answers.length; z++){
        for( var x = 0; x<final_results.length; x++){
            if(answers[z] == subjects[z].parties[x].position){
                for(var y = 0; y<final_results.length; y++){
                    if(subjects[z].parties[x].name == final_results[y].name)
                    final_results[y].points++;
                }
            }
        }
    }
    final_results.sort(function(a,b){
        return b["points"]-a["points"]
    });
    console.log(final_results)
}