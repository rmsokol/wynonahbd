//variables
images = ["images/imageA.jpg","images/imageB.jpg","images/imageC.jpg","images/imageD.jpg","images/imageE.jpg","images/imageF.jpg","images/imageG.jpg"]

const slideshowContainer = document.querySelector("#slideshow-container")
const present = document.querySelector("#present")
const currentIndex = 0

// event listener for clicking on present

present.addEventListener("click", showRandomImage)

// function using random index and interating array to html container
function showRandomImage() {
    const currentIndex = Math.floor(Math.random()*     images.length)
    document.getElementById("present").style.display="none"
    slideshowContainer.innerHTML = `<img class="imgs center"        src="${images[currentIndex]}">`
  // timing method calling above function
    
}

setInterval(showRandomImage, 2000)


