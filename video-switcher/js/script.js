
// Get the video
var video = document.getElementById("myVideo");

// A key to know what does what
/*


1 - Clementine Intro - booting up screen. “Loading Set…” 
2 - CR-V - flickering CR-V Visual 
3 - Feature Film - Christian Light Video
4 - Shadows Shadows
5 - Starlight - Starlight Wash MV
6 - Idle Still - 
7 - Go Again - lyric video
8 - Like You- gradient shapes
9 - Instant Crush?- spirited away 

10 - WEBCAM


 */


document.addEventListener("keypress", function(event) {
    if (event.keyCode == 49) { //1 - Clementine Intro - booting up screen. “Loading Set…” 


        
       video.srcObject = null;

        video.src = "videos/1-intro.mp4";
        video.play() 

    }

    if (event.keyCode == 50) { //2 - CR-V - flickering CR-V Visual 

        
        video.srcObject = null;
 
         video.src = "videos/2-crv.mp4";
         video.play() 
 
     }
    
    if(event.keyCode == 51) { //3 - Feature Film - Christian Light Video

        video.srcObject = null;

        video.src = "videos/3-go-again.mp4"
    }

    if(event.keyCode == 52) { //Press 4
        video.srcObject = null;

        video.src = "videos/4-simpsons-vid.mp4"
    }

    if(event.keyCode == 53) {// Press 5 WEBCAM
        window.navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
           video.play()
        })
    }
   
  });

