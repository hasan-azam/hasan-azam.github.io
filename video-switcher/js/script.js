
// Get the video
var video = document.getElementById("myVideo");


document.addEventListener("keypress", function(event) {
    if (event.keyCode == 49) { //If you Press 1, what happens
        
       video.srcObject = null;

        video.src = "videos/1-crv.mp4";
        video.play() 

    }
    if(event.keyCode == 50) { //Press 2
        
        video.srcObject = null;

        video.src = "videos/2-flower-16x9.mp4"

    }

    if(event.keyCode == 51) { //Press 3
        video.srcObject = null;

        video.src = "videos/3-go-again.mp4"
    }

    if(event.keyCode == 52) { //Press 4
        video.srcObject = null;

        video.src = "videos/4-simpsons-vid.mp4"
    }

    if(event.keyCode == 53) {// Press 5
        window.navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
           video.play()
        })
    }

  });

