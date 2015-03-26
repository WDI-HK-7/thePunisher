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


// function pickSong() {
//     if (punishment === punishments[3]) {
//     console.log (punishment + "Oh Yeah, lets pick one");
//     }

//     var chooseSong = document.getElementsById('pickSong');
// } 

function pickSong() {
    if (punishment === punishments[3]) {
    return punishment;
    
    }

    var chooseSong = document.getElementsById('pickSong');
    console.log (punishment + "Oh Yeah, lets pick one");
} 

function raveWDI() {
  crazy = setInterval(crazyBackground, 200);
}

// to Stop the RAVE, pls clear the interval timer
// clearInterval(crazy)

// function pickSong() {
//     if (punishment === punishments[3]) {
//     console.log (punishment + "Oh Yeah, lets pick one");
//     }

//     var chooseSong = document.getElementsById('pickSong');
// } 

function pickSong() {
    if (punishment === punishments[3]) {
    return punishment;

    }

    var chooseSong = document.getElementsById('pickSong');
    console.log (punishment + "Oh Yeah, lets pick one");
} 