var punishments = [];
var crazy;

punishments.push("Thou Shall refer to us Thy majesty");
punishments.push("20 Pushups (except for xiao: 20 with someone else on top)");
punishments.push("Bring coffee/beverages to everyone");
punishments.push("Sing a song");

function punish() {
  var randomPunishment = Math.floor(Math.random() * punishments.length);
  var punishment = punishments[randomPunishment];

  var name = document.getElementById('name').value ;

  var salutation = document.getElementById('punishment-salutation')
  salutation.innerText = "Hi " + name + "!!" + " Ready to be punished?"

  document.getElementById('punishment').innerHTML = punishment;
}

var score = []
var sum = 0

function avgScore(score) {
  var eval = score[document.getElementById('score').value];
  for ( var = i; i < score.length; i ++ ) {
    sum = score[i] // how to write the function??  
  }
  // average score = sum of scores in array/ score.length ??? 
}

function crazyBackground() {
  var colors = ["green", "red", "blue"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.bgColor = colors[randomNumber];
}

function raveWDI() {
  crazy = setInterval(crazyBackground, 200);
}

// to Stop the RAVE, pls clear the interval timer
// clearInterval(crazy);
