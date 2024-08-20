const images = [
    "c:/Users/user/Desktop/codealpha/tasks 1/image/1.jpg",
    "c:/Users/user/Desktop/codealpha/tasks 1/image/2.jpg",
    "c:/Users/user/Desktop/codealpha/tasks 1/image/3.jpg",
    "c:/Users/user/Desktop/codealpha/tasks 1/image/4.jpg",
    "c:/Users/user/Desktop/codealpha/tasks 1/image/5.jpg"
];

let currentIndex = 0;
const currentImage = document.getElementById("currentImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function updateImage(direction) {
    currentImage.style.transform = `rotateY(${direction === 'next' ? '-180' : '180'}deg)`;
    setTimeout(() => {
        currentImage.src = images[currentIndex];
        currentImage.style.transform = 'rotateY(0deg)';
    }, 500);
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage('prev');
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage('next');
});
