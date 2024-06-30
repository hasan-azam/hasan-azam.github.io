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

4 - Sophie's Boyfriend Main - Lava Lamp
5 - Sophie's Alt Visual

6 - Feature Film - Christian Video

7 - What She Says - Sungazer

8- CR-V Main
9 - CR-V Air Freshener

Q - Like You 1
W - Like You 2

 */

document.addEventListener("keypress", function(event) {
    // Remove the gradient background when any key is pressed except '4'
    if (event.keyCode != 52) {
        document.body.classList.remove('gradient-background');
    }

    if (event.keyCode == 49) { //1 - Clementine Intro - booting up screen. “Loading Set…”
        video.srcObject = null;
        video.src = "videos/1-boot-intro.mp4";
        video.play();
    }

    if (event.keyCode == 50) { //2 - flower logo 
        video.srcObject = null;
        video.src = "videos/flower-logo-animation.mp4";
        video.play();
    }
    
    if(event.keyCode == 51) { //3 - Any Other Summer - Spirited Away 
        video.srcObject = null;
        video.src = "videos/spirited-away.mp4";
    }

    if(event.keyCode == 52) { //4 - Sophie Main Visual - Lava Lamp
        video.srcObject = null;
        video.src = "videos/sophie-main-visual.mp4";
        // Add the gradient background class to the body
        document.body.classList.add('gradient-background');
    }

    if(event.keyCode == 53) { //5 - Sophie Alt Visual
        video.srcObject = null;
        video.src = "videos/sophie-alt-vid.mp4";
    }

    if(event.keyCode == 54) { //6 - Feature Film - christian vid
        video.srcObject = null;
        video.src = "videos/4-feature-film.mp4";
    }

    if(event.keyCode == 55) { //7 - What She Says - Sungazer
        video.srcObject = null;
        video.src = "videos/sungazer.mp4";
    }

    if(event.keyCode == 56) { //8 - CR-V - Main
        video.srcObject = null;
        video.src = "videos/2-crv.mp4";
    }

    if(event.keyCode == 57) { //9 - CR-V Air Freshener
        video.srcObject = null;
        video.src = "videos/CR-V Air Freshener.mp4";
    }


    if(event.keyCode == 113) { //Q - Like You 1
        video.srcObject = null;
        video.src = "videos/8-like-you.mp4";
       //video.src = "videos\like-you-2.mp4";

    }

    if(event.keyCode == 101) { //E - Like You 2
        video.srcObject = null;
        video.src = "videos\too-like-you.mp4";
    }

    if(event.keyCode == 99) {// Press C WEBCAM
        window.navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.play();
        });
    }

    if(event.keyCode == 109) { //MERCH
        video.srcObject = null;
        video.src = "videos/merch-vid.mp4";
    }

    if(event.keyCode == 115) { //STATIC
        video.srcObject = null;
        video.src = "videos/static.mp4";
    }
});
