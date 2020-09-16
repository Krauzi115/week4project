var questions = [
    {
          prompt: "The skyline was beautiful on fire all twisted metal scratching upwards everything washed in a thin orange haze comes from the monologue Godspeed you Black Emperor.\n(a) True\n(b) False\n",
          answer: "a"
    },
    {
         prompt: "The animal in the Abusey Junction // We out Here video by KOKOROKO is a garden snake. \n(a) True\n(b) False\n",
         answer: "b"
    },
    {
         prompt: "When all my dreams were gone did I still hold on and wait too long?\n(a) True\n(b) False\n",
         answer: "a"
    }
];
var score = 0;


for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);