
var punishments = [];
var mildcrazy;
var modcrazy;
var craycray;

punishments.push("Thou Shall Refer To Us As Your Majesty");
punishments.push("20 Pushups (Except Xiao: 20 With Someone On Top)");
punishments.push("Serve Coffee/Beverages For Everyone The Whole Day");
punishments.push("Sing a Song");


// FUNCTION PUNISH READY
function punishReady() {
  var randomPunishment = Math.floor(Math.random() * punishments.length);
  var punishment = punishments[randomPunishment];


  if (punishments[randomPunishment] === punishments[0]) {
    document.body.style.backgroundImage = "url(https://s-media-cache-ak0.pinimg.com/736x/bc/fd/f7/bcfdf7811781ea1140c36dfae17ef177.jpg)";
  } else if (punishments[randomPunishment] === punishments[1]) {
    document.body.style.backgroundImage = "url(http://www.myfit.gr/media/517144/1.jpg)";
  } else if (punishments[randomPunishment] === punishments[2]) {
    document.body.style.backgroundImage = "url(http://wallpaper-download.net/wallpapers/random-wallpapers-black-coffee-wallpaper-wallpaper-33699.jpg)";
  } else if (punishments[randomPunishment] === punishments[3]) {
    document.body.style.backgroundImage = "url(http://rack.0.mshcdn.com/media/ZgkyMDEzLzA2LzE3L2E5L2dpZ2l0ZmF2b3JpLmViMzk0LmpwZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/3a9e6726/b1f/gigit-favorite-band.jpg)";
  }

  var name = document.getElementById('name').value;

  var salutation = document.getElementById('punishment-salutation')
  salutation.innerText = "Awesome " + name + "!" + " Your Punishment Is..."

  document.getElementById('punishment').innerHTML = punishment;
}

// FUNCTION PUNISH NOT READY
function punishNo() {
  var randomPunishment = Math.floor(Math.random() * punishments.length);
  var punishment = punishments[randomPunishment];


  if (punishments[randomPunishment] === punishments[0]) {
    document.body.style.backgroundImage = "url(https://s-media-cache-ak0.pinimg.com/736x/bc/fd/f7/bcfdf7811781ea1140c36dfae17ef177.jpg)";
  } else if (punishments[randomPunishment] === punishments[1]) {
    document.body.style.backgroundImage = "url(http://www.myfit.gr/media/517144/1.jpg)";
  } else if (punishments[randomPunishment] === punishments[2]) {
    document.body.style.backgroundImage = "url(http://wallpaper-download.net/wallpapers/random-wallpapers-black-coffee-wallpaper-wallpaper-33699.jpg)";
  } else if (punishments[randomPunishment] === punishments[3]) {
    document.body.style.backgroundImage = "url(http://rack.0.mshcdn.com/media/ZgkyMDEzLzA2LzE3L2E5L2dpZ2l0ZmF2b3JpLmViMzk0LmpwZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/3a9e6726/b1f/gigit-favorite-band.jpg)";
  }

  var name = document.getElementById('name').value;

  var salutation = document.getElementById('punishment-salutation')
  salutation.innerText = "Haha! Too Bad " + name + ", You Still Have To:"

  document.getElementById('punishment').innerHTML = punishment;
}

// FUNCTION SHOW DANCE MENU
function showDanceMenu() {
  document.getElementById('dance-menu-bar').style.display = "block";
}

//FUNCTION HIDE DANCE MENU
function hideDanceMenu() {
  document.getElementById('dance-menu-bar').style.display = "none";
}

//FUNCTION TOGGLE MENU -- tried == and === neither worked. it appears but wont dissappear.
// function toggleMenu() {
//   if (document.getElementById('dance-menu-bar').style.display = "none") {
//     document.getElementById('dance-menu-bar').style.display = "block";
//   } else if (document.getElementById('dance-menu-bar').style.display = "block") {
//     document.getElementById('dance-menu-bar').style.display = "none";
//   }
// }

//MILD RAVE
function crazyForeground() {
  var colors = ["red","blue","green","yellow"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.fgColor = colors[randomNumber]; 
}

function mildraveWDI() {
  mildcrazy = setInterval(crazyForeground,200);
}

//MODERATE RAVE
function crazyWrapper() {
  var colors = ["rgba(12,225,83,0.5)", "rgba(21,79,190,0.5)", "rgba(234,12,28,0.5)", "rgba(225,225,0,0.5)"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.getElementById('content-wrapper').style.backgroundColor = colors[randomNumber];
}

function modraveWDI() {
  mildcrazy = setInterval(crazyForeground,200);
  modcrazy = setInterval(crazyWrapper, 200);
}

//JUST GO CRAY CRAY
function crazyBackground() {
  var colors = ["rgba(12,225,83,0.5)", "rgba(21,79,190,0.5)", "rgba(234,12,28,0.5)", "rgba(225,225,0,0.5)"];
  var randomNumber = Math.floor(Math.random() * colors.length);

  document.getElementById('fake-body').style.backgroundColor = colors[randomNumber];

}

function crayraveWDI() {
  mildcrazy = setInterval(crazyForeground,200);
  modcrazy = setInterval(crazyWrapper, 200);
  craycray = setInterval(crazyBackground,200);
}

//-------- RESET BUTTON -----------//
function reset() {
  document.getElementById('name').value = null;
  document.getElementById('punishment-salutation').innerHTML = null;
  document.getElementById('punishment').innerHTML = null;

  clearInterval(craycray);
  document.getElementById('fake-body').style.backgroundColor = "transparent";
  document.body.style.backgroundImage = "url(https://farm4.staticflickr.com/3392/3256155178_aba36cb403.jpg)";

  clearInterval(modcrazy);
  document.getElementById('content-wrapper').style.backgroundColor = "rgba(255,255,255,0.5)";

  clearInterval(mildcrazy);
  document.fgColor = "black";

  // clearInterval(modcrazy);
  // document.getElementById('content-wrapper').style.backgroundColor = "rgba(255,255,255,0.5)";

  // clearInterval(mildcrazy);
  // document.fgColor = "black";

  // clearInterval(mildcrazy);
  // document.fgColor = "black";
}