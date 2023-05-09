
// Get the video
var video = document.getElementById("myVideo");


document.addEventListener("keypress", function(event) {
    if (event.keyCode == 49) { //If you Press 1, what happens
        document.getElementById("myVideo").src = "/Z Wolf Wolf.mp4";  

    }
    if(event.keyCode == 50) {
        document.getElementById("myVideo").src = "/The Land of Chocolate - Simpsons Clip.mp4"
    }
  });

