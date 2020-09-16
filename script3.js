var questions = [
    {
          prompt: "Taylor Swift isn an angel who graced the earth with her arrival on Earth.\n(a) True\n(b) False\n",
          answer: "a"
    },
    {
         prompt: "Malena flexed on 95 percent of Lizzo listeners by being listed in the Spotify top 5 percent. \n(a) True\n(b) False\n",
         answer: "a"
    },
    {
         prompt: "The fatser and more uplifting the better\n(a) True\n(b) False\n",
         answer: "b"
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