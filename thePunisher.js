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
var currentFile = "";
        function playAudio() {
            // Check for audio element support.
            if (window.HTMLAudioElement) {
                try {
                    var oAudio = document.getElementById('myaudio');
                    var btn = document.getElementById('play'); 
                    var audioURL = document.getElementById('comedy_circus_music.mp3'); 

                    //Skip loading if current file hasn't changed.
                    if (audioURL.value !== currentFile) {
                        oAudio.src = audioURL.value;
                        currentFile = audioURL.value;                       
                    }

                    // Tests the paused attribute and set state. 
                    if (oAudio.paused) {
                        oAudio.play();
                        btn.textContent = "Pause";
                    }
                    else {
                        oAudio.pause();
                        btn.textContent = "Play";
                    }
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                     if(window.console && console.error("Error:" + e));
                }
            }
        }

/ to Stop the RAVE, pls clear the interval timer
// clearInterval(crazy);

/**object.punishMusic= function() {
  
  var music=document.getElementById("playbutton").play
  audioElm.src = document.getElementById('comedy_circus_music.mp3).value;
         audioElm.play();
}*/

