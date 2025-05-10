let interval = 8000; //in ms
let imgs = ["1.jpg","2.jpg","3.jpg"]; //total imgs
let index = 0;

const slideShowContainer = document.querySelector("div.slideShow");
const img = slideShowContainer.querySelector("img");

function slideshow(){
    if (index >= imgs.length){
        index = 0;
    }

    img.src = `media/images/${imgs[index]}`;
    index++;
}

window.onload = setInterval(slideshow, interval);