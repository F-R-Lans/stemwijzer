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
    document.getElementById("question_buttons").style.display = "block";
    document.getElementById("start_button").style.display = "none";
    console.log("question_buttons");
    
}
    //TODO make start button dissapear on onclick

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

//looks if answer is given and goes to next question
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
//calculate results, take answers, compare with party position, and add if match. 
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
    //sort final results from highest to lowest
    final_results.sort(function(a,b){
        return b["points"]-a["points"]
    });
    console.log(final_results)
}

// print out final results

function showfinalresults(){
    document.getElementById("resultpage").style.display = "block";

    final_results.toString();

}