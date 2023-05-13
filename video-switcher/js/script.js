
// Get the video
var video = document.getElementById("myVideo");


document.addEventListener("keypress", function(event) {
    if (event.keyCode == 49) { //If you Press 1, what happens
        
       video.srcObject = null;

        video.src = "videos/crv-vid-final.mp4";
        video.play() 

    }
    if(event.keyCode == 50) {
        
        video.srcObject = null;

        video.src = "videos/flower-4x3.mp4"

    }

    if(event.keyCode == 51) {
        video.srcObject = null;

        video.src = "videos/sample-20s.mp4"
    }

    if(event.keyCode == 52) {
        video.srcObject = null;

        video.src = "videos/sample-10s.mp4"
    }

    if(event.keyCode == 53) {
        window.navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
           video.play()
        })
    }

  });

