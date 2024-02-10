const image = document.querySelector("#thank-you-gif");

const imageWidth = image.width;
const imageHeight = image.height;

function resizeImage() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const widthRatio = windowWidth / imageWidth;
    const heightRatio = windowHeight / imageHeight;

    const scale = Math.min(widthRatio, heightRatio);

    image.style.width = (imageWidth * scale) + 'px';
    image.style.height = (imageHeight * scale) + 'px';
}

window.addEventListener('resize', () => {
    resizeImage()
})

resizeImage()