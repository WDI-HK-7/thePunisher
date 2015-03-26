var punishments = [];
var rewards = [];
var crazy;

punishments.push("Thou Shall refer to us as Thy majesty");
punishments.push("20 Pushups (except for xiao: 20 with someone else on top)");
punishments.push("Bring coffee/beverages to everyone");
punishments.push("Sing a song");
punishments.push("Eat a pack of dried durian")


function punish() {
  var randomPunishment = Math.floor(Math.random() * punishments.length);
  var punishment = punishments[randomPunishment];

  var name = document.getElementById('name').value ;

  var salutation = document.getElementById('punishment-salutation')
  salutation.innerText = "Hi " + name + "!!" + " Ready to be punished?"

  document.getElementById('punishment').innerHTML = punishment;
}


rewards.push("Free Massage");
rewards.push("Free Lunch");


function reward() {
  var randomReward = Math.floor(Math.random() * rewards.length);
  var reward = rewards[randomReward];

  var name = document.getElementById('name').value ;

  var salutation = document.getElementById('punishment-salutation')
  salutation.innerText = "Hi " + name + "!!" + " Ready to be rewarded?"

  document.getElementById('punishment').innerHTML = reward;
}


function crazyBackground() {
  var colors = ["green", "red", "blue", "yellow", "purple"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.bgColor = colors[randomNumber];
}

function raveWDI() {
  crazy = setInterval(crazyBackground, 800);
}

// to Stop the RAVE, pls clear the interval timer
// clearInterval(crazy);
