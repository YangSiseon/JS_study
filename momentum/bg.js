const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

const paintImage = number => {
    const img = new Image();
    img.src = `./image/${number}.jpg`;
    body.appendChild(img);
    img.classList.add("bgImage");
};

const getRandom = () => {
    const number = Math.floor(Math.random() * IMAGE_NUMBER) + 1;
    return number;
};

const bgInit = () => {
    const ranNumber = getRandom();
    paintImage(ranNumber);
};

bgInit();
