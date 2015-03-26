var punishments = [];
var crazy;

punishments.push("Thou shall refer to us thy majesty");
punishments.push("Do 20 pushups");
punishments.push("Bring coffee/beverages to everyone");
punishments.push("Sing a song");

function punish() {
  var randomPunishment = Math.floor(Math.random() * punishments.length);
  var punishment = punishments[randomPunishment];

  var name = document.getElementById('name').value ;

  if (name === "Xavi") {
    var salutation = document.getElementById('punishment-salutation')
    salutation.innerText = "Hi " + name + "!!" + " Have a Good Day!"
  } else if ((name === "Mia" || name === "Xiao") && punishment === "Do 20 Pushups") {
    var salutation = document.getElementById('punishment-salutation')
    salutation.innerText = "Hi " + name + "!!" + " 20 pushups is not for you. Try again!";
  } else if (name === "Fer" || name === "F3r") {
    var salutation = document.getElementById('punishment-salutation')
    salutation.innerText = "Hi " + name + "!!" + " Ready to ne punished?";

    document.getElementById('punishment').innerHTML = "Sing a song";
  } else if (name === "Harry") {
    var salutation = document.getElementById('punishment-salutation')
    salutation.innerText = "Hi " + name + "!!" + " Ready to be punished?";

    document.getElementById('punishment').innerHTML = "Sing a song and do 20 pushups";
  } else {
    var salutation = document.getElementById('punishment-salutation')
    salutation.innerText = "Hi " + name + "!!" + " Ready to be punished?";

    document.getElementById('punishment').innerHTML = punishment;
  }
}

function punishMore() {
  alert ("Hello " + name);
  alert ("Do you want to play a game?");
  alert ("This is just getting started!");
  alert ("Are you tempted to check that box below?");
  alert ("Yes?");
  alert ("Don't do that!");
  alert ("Hey!");
  alert ("Wait " + name + "!");
  alert ("Di you want to be my friend?");
  alert ("No?");
  alert ("Forking flowers!");
  alert ("One more");
  alert ("Is that video anoying?");
  alert ("This is the last one!");
  alert ("Or not");
  alert ("Stay with me");
  alert ("Nice talking to you!");
}
function andMore() {
  window.open("rickrolled.html");
}

function crazyBackground() {
  var colors = ["green", "red", "blue", "Yellowgreen", "Chartreuse", "Cyan", "Deeppink", "Darkturquoise", "Darkorchid", "Deepskyblue", "Fuchsia", "Lawngreen", "Greenyellow", "Lime", "Magenta", "Black", "White"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.bgColor = colors[randomNumber];
}

function raveWDI() {
  crazy = setInterval(crazyBackground, 100);
}

function Video1() {
  window.open("video1.html");
}

function Video2() {
  window.open("video2.html");
}

function Video3() {
  window.open("video3.html");
}

function Video4() {
  window.open("video4.html");
}

function Alert1() {
  alert ("One more!");
}

function Alert2() {
  alert ("I'm stopping soon!");
}

function Alert3() {
  alert ("Rickrolled!");
}

function Alert4() {
  alert ("Hit me baby one more time!");
}

// to Stop the RAVE, pls clear the interval timer
// clearInterval(crazy);


