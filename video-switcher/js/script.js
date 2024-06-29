
// Get the video
var video = document.getElementById("myVideo");

// A key to know what does what
/*

S - Static
M - Merch
C - Camera

1 - Sunsick Loading - booting up screen. “Loading Set…” 
2 - Sunsick Flower Logo 
3 - Any Other Summer - Spirited Away


 */


document.addEventListener("keypress", function(event) {
    if (event.keyCode == 49) { //1 - Clementine Intro - booting up screen. “Loading Set…” 


        
       video.srcObject = null;

        video.src = "videos/1-boot-intro.mp4";
        video.play() 

    }

    if (event.keyCode == 50) { //2 - flower logo 

        
        video.srcObject = null;
 
         video.src = "videos/flower-logo-animation.mp4";
         video.play() 
 
     }
    
    if(event.keyCode == 51) { //3 - Any Other Summer - Spirited Away 


        video.srcObject = null;

        video.src = "videos/3-go-again.mp4"
    }

    if(event.keyCode == 52) { //4 - Feature Film - Christian Light Video

        video.srcObject = null;

        video.src = "videos/4-feature-film.mp4"
    }
    if(event.keyCode == 53) { //5 - When You Were Young - music video


        video.srcObject = null;

        video.src = "videos/5-wwwy.mp4"
    }
    if(event.keyCode == 54) { //6 - Shadows Shadows - christian vid


        video.srcObject = null;

        video.src = "videos/6-shadow.mp4"
    }

    if(event.keyCode == 55) { //7 - Idle Still - Spirited Away


        video.srcObject = null;

        video.src = "videos/7-idle-still.mp4"
    }

    if(event.keyCode == 56) { //8 - Like You- gradient shapes


        video.srcObject = null;

        video.src = "videos/8-like-you.mp4"
    }

    if(event.keyCode == 57) { //9 - Instant Crush?- spirited away 


        video.srcObject = null;

        video.src = "videos/5-wwwy.mp4"
    }


    if(event.keyCode == 99) {// Press 0 WEBCAM
        window.navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
           video.play()
        })
    }
   



    if(event.keyCode == 109) { //MERCH - 


        video.srcObject = null;

        video.src = "videos/merch-vid.mp4"
    }

    if(event.keyCode == 115) { //STATIC - 


        video.srcObject = null;

        video.src = "videos/static.mp4"
    }

    

  });

