
var time = document.getElementById("time");
var startBtn = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var timeoutId = null;
var ms = 0;
var sec = 0;
var min = 0;
var hr = 0;
/* function to start stopwatch */
startBtn.addEventListener("click", function (flag) {
    if (flag) {
        startBtn.disabled = true;
    }
    timeoutId = setInterval(function () {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        ms++;

        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            loadImages();
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }

        if (ms < 10) {
            ms = '0'+ ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }

        if (hr < 10) {
            hr = '0' + hr;
        }
        time.innerHTML = hr + ':' + min + ':' + sec + ':' + ms;

        // calling start() function recursivly to continue stopwatch
        // start();
        //
    }, 10); // setTimeout delay time 10 milliseconds
});

/* function to pause stopwatch */
stop.addEventListener('click',function() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
});

/* function to reset stopwatch */
reset.addEventListener('click', function(){
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    time.innerHTML = '00:00:00:00';
    startBtn.disabled = false;
});

// Extra Styling for changing images for ever one minute
function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  function setRandomBackground(images) {
    const container = document.querySelector('.body'); // Replace '.container' with the selector of your desired HTML element
    const randomImage = getRandomImage(images);
    document.body.style.backgroundImage = `url('assets/${randomImage}')`; // Assuming your images are located in the 'assets' folder
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundSize = 'cover';

  }
  
  async function loadImages() {
    try {
      const response = await fetch('./assets/images.json'); // Assuming you have a JSON file listing the image filenames or URLs in the 'assets' folder
      const images = await response.json();
      console.log(images);
      setRandomBackground(images);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  }
  

  

