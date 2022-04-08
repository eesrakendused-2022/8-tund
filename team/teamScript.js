const smallImages = document.querySelectorAll(".smallImage");
const bigImage = document.querySelector(".bigImage");
const imageDescription = document.querySelector("#imageDescription");
const bigImageDiv = document.querySelector("#teamBigImage");
const video = document.querySelector("#video");
const prevImageButton = document.querySelector("#prevImage");
const nextImageButton = document.querySelector("#nextImage");
prevImageButton.addEventListener("click", function(event) {prevImage(event)});
nextImageButton.addEventListener("click", function(event) {nextImage(event)});
document.addEventListener("keydown", function(event) {prevImage(event)});
document.addEventListener("keydown", function(event) {nextImage(event)});
let sources = [];
smallImages.forEach(smallImage => {
    sources.push(smallImage.src);
});

const descriptions = {
    "Taavi Pahk": "Taavi Pahk on Tallinna Ülikoolis õppiv informaatika tudeng.",
    "Tallinna Ülikool": "Tallinna Ülikool on õppeasutus. Seal pakutakse muuhulgas eesrakenduste arendamise kursust.",
    "Youtube": "Siin on väga hea ja huvitav muusikavideo.",
};

for (let i = 0; i < smallImages.length; i++) {
    const image = smallImages[i];
    image.addEventListener("click", function() {
        loadBigImage(image);
    });
}

function loadBigImage(image) {
    if (image.alt == bigImage.alt || video.hidden == false && image.alt == "Youtube") {
        return;
    }
    bigImageDiv.style.opacity = 0;
    imageDescription.textContent = descriptions[image.alt];
    updateBigImage(image);
    if(image.alt == "Youtube") {
        video.hidden = false;
        bigImage.hidden = true;
    } else {
        video.hidden = true;
        bigImage.hidden = false;
    }
    opacityAnimation();
}

function nextImage(event=null) {
    if(event.type=="keydown" && event.key!="ArrowRight") {
        return;
    }
    let newSource = "";
    const bigImageSource = bigImage.src;
    if(bigImageSource == sources[sources.length-1]) {
        newSource = sources[0];
    } else {
        newSource = sources[sources.indexOf(bigImageSource)+1];
    }
    smallImages.forEach(smallImage => {
        if(smallImage.src == newSource) {
            loadBigImage(smallImage);
        }
    });
}

function prevImage(event=null) {
    if(event.type=="keydown" && event.key!="ArrowLeft") {
        return;
    }
    const bigImageSource = bigImage.src;
    if(bigImage.src == sources[0]) {
        newSource = sources[sources.length-1];
    } else {
        newSource = sources[sources.indexOf(bigImageSource)-1];
    }
    smallImages.forEach(smallImage => {
        if(smallImage.src == newSource) {
            loadBigImage(smallImage);
        }
    });
}

function updateBigImage(image) {
    bigImage.src = image.src;
    bigImage.alt = image.alt;
}

function opacityAnimation() {
    let id = null;
    let opacity = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
      if (opacity >= 1) {
        clearInterval(id);
      } else {
        opacity += 0.05;
        bigImageDiv.style.opacity = opacity;
      }
    }

} 

loadBigImage(smallImages[0]);