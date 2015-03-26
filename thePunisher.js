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

function crazyBackground() {
  var colors = ["green", "red", "blue"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.bgColor = colors[randomNumber];
}

function raveWDI() {
  crazy = setInterval(crazyBackground, 200);
}

function pickASongWDI() {
  var song = Math.round(Math.random()*100);

  if (song  < 10) {
    window.open('https://www.youtube.com/watch?v=oK19iX3L87w','_blank')
  } else if (song < 20) {
    window.open('https://www.youtube.com/watch?v=6_b7RDuLwcI','_blank')
  } else if (song < 30) {
    window.open('https://www.youtube.com/watch?v=vWHwSWkBjnY','_blank')
  } else if (song < 40) {
    window.open('https://www.youtube.com/watch?v=0FuL1VMWQ7Q#t=62','_blank')
  } else if (song < 50) {
    window.open('https://www.youtube.com/watch?feature=player_embedded&v=DCazMqCJVMc','_blank')
  } else if (song < 60) {
    window.open('https://www.youtube.com/watch?feature=player_embedded&v=SrkeWsQZNyU','_blank')
  } else if (song < 70) {
    window.open('https://www.youtube.com/watch?feature=player_embedded&v=K5G1FmU-ldg','_blank')
  } else if (song < 80) {
    window.open('https://www.youtube.com/watch?feature=player_embedded&v=sYffFEIAzdE','_blank')
  } else if (song < 90) {
    window.open('https://www.youtube.com/watch?feature=player_embedded&v=bRx0KNqKqnA','_blank')
  } else if (song <=100) {
    window.open('https://www.youtube.com/watch?feature=player_embedded&v=5ZYgIrqELFw','_blank')
  }
}

// to Stop the RAVE, pls clear the interval timer
// clearInterval(crazy);




















