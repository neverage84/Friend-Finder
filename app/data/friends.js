$(document).ready(function() {
 
 var characters = [
    {
        "name": "Leia Skywalker",
        "photo": "../public/images/profile/leia.jpeg",
        "scores": [
            4,
            2,
            2,
            2,
            3,
            5,
            1,
            1,
            3,
            2
        ]
    },
    {
        "name": "Anakin Skywalker",
        "photo": "../public/images/profile/anakin.jpeg",
        "scores": [
            5,
            2,
            2,
            4,
            2,
            1,
            1,
            5,
            3,
            5
        ]
    },
    {
        "name": "Lando Calrissian",
        "photo": "../public/images/profile/lando.jpeg",
        "scores": [
            4,
            3,
            1,
            5,
            4,
            1,
            5,
            1,
            5,
            3
        ]
    },
    {
        "name": "Luke Skywalker",
        "photo": "../public/images/profile/luke.jpeg",
        "scores": [
            4,
            1,
            5,
            1,
            3,
            5,
            1,
            1,
            1,
            1
        ]
    },
    {
        "name": "Han Solo",
        "photo": "../public/images/profile/luke.jpeg",
        "scores": [
            3,
            3,
            1,
            5,
            3,
            2,
            5,
            2,
            5,
            2
        ]
    },
    {
        "name": "Yoda",
        "photo": "../public/images/profile/yoda.jpeg",
        "scores": [
            1,
            5,
            1,
            1,
            5,
            5,
            1,
            1,
            1,
            1
        ]
    }

]

var FinalAnswers = [];

$("#match").on("click", function(event){
  
    for (var i = 1; i < 11; i++){
       FinalAnswers.push(parseInt($("#Q"+ i).val()));
        
    }
    console.log(FinalAnswers);  
  if (FinalAnswers.includes(NaN)){
      FinalAnswers = [];
      alert("Please Complete Questions");
  }
  else {
      Match();
  }
});

var sum = 0;
var comparison=[];
var FinalScore = [];
function Match(){
    for (var i = 0; i < characters.length; i++){
        comparison = characters[i].scores;
        console.log(comparison);
        for ( var j = 0; j < 10; j++){
            sum += Math.abs(comparison[j] - FinalAnswers[j]);
        
        }
      FinalScore.push(sum);
        sum = 0;  
    }

    console.log(FinalScore);

    
}


});
  