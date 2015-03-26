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
  var numberTardies = document.getElementById('numberTardies').value ;

  if (name == "" || name == null){
    alert('Please enter your name');
    }

  else{
    if(numberTardies >= 5){
      var salutation = document.getElementById('punishment-salutation');
      salutation.innerText = "Hi " + name + "!!" + " Your Punishment is..."
      document.getElementById('punishment').innerHTML = punishment;
      var additional = document.getElementById('additional-punishment');
      additional.innerText = "You also need to dye your hair!"
      
    }

    else{
      var salutation = document.getElementById('punishment-salutation')
      salutation.innerText = "Hi " + name + "!!" + " Ready to be punished?"
      document.getElementById('punishment').innerHTML = punishment;
    } 
  }
}

function crazyBackground() {
  var colors = ["green", "red", "blue"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.bgColor = colors[randomNumber];
}

function raveWDI() {
  crazy = setInterval(crazyBackground, 200);
}

function hairColour(){
  var hairColour = ["green", "red", "blue", "pink", "brown", "orange"];
  var randomHairNumber = Math.floor(Math.random() * hairColour.length);
  document.getElementById('dye-hair-colour').innerHTML = hairColour[randomHairNumber];

}
