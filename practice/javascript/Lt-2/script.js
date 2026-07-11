const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg"
];

let currentIndex = 0;

const image = document.getElementById("image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


function showImage() {
    image.src = images[currentIndex];
}


nextBtn.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

prevBtn.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});

setInterval(function () {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
}, 3000);