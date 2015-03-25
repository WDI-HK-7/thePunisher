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

// Added two extra colors
function crazyBackground() {
  var colors = ["green", "red", "blue", 'orange', 'yellow'];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.bgColor = colors[randomNumber];
}

// Randomly changes the color and size of h2 tag on clicking rave
function crazyText() {
  var colors = ["green", "red", "blue", 'orange', 'yellow'];
  var randomNumber = Math.floor(Math.random() * colors.length);

  var sizes = ["xx-small","x-small","small,medium","large","x-large","xx-large"];
  var secondRandomNumber = Math.floor(Math.random() * sizes.length);

  document.getElementById('punishment-salutation').style.color = colors[randomNumber];
  document.getElementById('punishment-salutation').style.fontSize = sizes[secondRandomNumber];
}

// Variables needed to be taken outside of function scope to use in new stop function below
var crazy; 
var crazyText;

function raveWDI() {
  crazy = setInterval(crazyBackground, 50);
  crazyText = setInterval(crazyText, 50);
}

// New stop function on click of new stop button

function stopRaveWDI() {
  clearInterval(crazy);
  clearInterval(crazyText);
}

// to Stop the RAVE, pls clear the interval timer
