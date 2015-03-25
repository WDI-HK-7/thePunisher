var punishments = [];
var crazy;
var audio = new Audio("http://freedownloads.last.fm/download/578751073/The%2BPinkie%2BPie%2BStyle.mp3");

punishments.push("Thou Shall refer to us Thy majesty");
punishments.push("20 Pushups (except for xiao: 20 with someone else on top)");
punishments.push("Bring coffee/beverages to everyone");
punishments.push("Sing a song");
// https://d1pr08d0h9gmdu.cloudfront.net/tracks/noochendy/happy.mp3
function punish() {
  var randomPunishment = Math.floor(Math.random() * punishments.length);
  var punishment = punishments[randomPunishment];

  var name = document.getElementById('name').value ;

  var salutation = document.getElementById('punishment-salutation')
  salutation.innerText = "Hi " + name + "!!" + " Ready to be punished?"

  document.getElementById('punishment').innerHTML = punishment;
}

function crazyBackground() {
  var colors = ["green", "red", "blue"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.bgColor = colors[randomNumber];
}

function raveWDI() {
  crazy = setInterval(crazyBackground, 200);
}

function playAudio() {
  audio.play();
}

function stopAudio() {
  audio.pause();
}

function fakeStopRave() {
  alert("Sorry, you can't stop the Rave! It goes faster");
  crazy = setInterval(crazyBackground, 100); 
}

function stopRave() {
  //crazy = setInterval(crazyBackground, 200);
  clearInterval(crazy); 
}

// to Stop the RAVE, pls clear the interval timer
// clearInterval(crazy);
