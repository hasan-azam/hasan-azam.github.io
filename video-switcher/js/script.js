
// Get the video
var video = document.getElementById("myVideo");


document.addEventListener("keypress", function(event) {
    if (event.keyCode == 49) { //If you Press 1, what happens
        
       
        video.srcObject = "videos/sample-5s.mp4";
        video.play() 

    }
    if(event.keyCode == 50) {
        

        video.src = "videos/The Land of Chocolate - Simpsons Clip.mp4"

    }

    if(event.keyCode == 51) {

        video.src = "videos/sample-20s.mp4"
    }

    if(event.keyCode == 52) {

        video.src = "videos/sample-10s.mp4"
    }

    if(event.keyCode == 53) {
        window.navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = (e) => {
                video.play();
            };
        })
    }

  });

