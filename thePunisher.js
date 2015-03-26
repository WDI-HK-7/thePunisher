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
  var colors = ["green", "red", "blue" , "Salmon" , "hotPink" 
    , "white" , "yellow", "gold", "orchid", "lightcyan"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.bgColor = colors[randomNumber];
}

function raveWDI() {
  crazy = setInterval(crazyBackground, 200);
}

function peanutButterJellyTime() {
  // add class peanut to image with ID peanut which is the large dancing banana
  document.getElementById('peanut').className = "peanut";
  // add class top-dance and respective classes to initialize animation
  document.getElementById(('t1')).className = ("top-dance t1");
  document.getElementById(('t2')).className = ("top-dance t2");
  document.getElementById(('t3')).className = ("top-dance t3");
  document.getElementById(('t4')).className = ("top-dance t4");
  document.getElementById(('t5')).className = ("top-dance t5");
  document.getElementById(('t6')).className = ("top-dance t6");
  document.getElementById(('t7')).className = ("top-dance t7");
  document.getElementById(('t8')).className = ("top-dance t8");
  document.getElementById(('t9')).className = ("top-dance t9");
  document.getElementById(('t10')).className = ("top-dance t10");
  // add class bot-dance and respective classes to initialize animation
  document.getElementById(('b1')).className = ("bot-dance b1");
  document.getElementById(('b2')).className = ("bot-dance b2");
  document.getElementById(('b3')).className = ("bot-dance b3");
  document.getElementById(('b4')).className = ("bot-dance b4");
  document.getElementById(('b5')).className = ("bot-dance b5");
  document.getElementById(('b6')).className = ("bot-dance b6");
  document.getElementById(('b7')).className = ("bot-dance b7");
  document.getElementById(('b8')).className = ("bot-dance b8");
  document.getElementById(('b9')).className = ("bot-dance b9");
  document.getElementById(('b10')).className = ("bot-dance b10");
}

function forkTheRepo() {
  document.getElementById('fork').className = "fork";
  document.getElementById('repo').className = "repo";
}

// to Stop the RAVE, pls clear the interval timer
// clearInterval(crazy);