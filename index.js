
const yesButton = document.querySelector("button#yes-button")
const noButton = document.querySelector("button#no-button")
const sadRabbit = document.querySelector("#crying")
const happyRabbit = document.querySelector("#kissing")

yesButton.addEventListener('click', () => {
    window.location.href = "thank-you.html"
})

yesButton.addEventListener('mouseenter', () => {
    if(happyRabbit.classList.contains("hide")) {
        happyRabbit.classList.remove("hide")
        sadRabbit.classList.add("hide")
    }
})

let yesButtonWidth = yesButton.offsetWidth
let yesButtonHeight = yesButton.offsetHeight

noButton.addEventListener('mouseenter', () => {

    if (yesButtonWidth < noButton.offsetWidth * 6) {
        yesButtonWidth += 10
        yesButtonHeight += 5
    }

    if(sadRabbit.classList.contains("hide")) {
        sadRabbit.classList.remove("hide")
        happyRabbit.classList.add("hide")
    }

    yesButton.style.width = yesButtonWidth + "px"
    yesButton.style.height = yesButtonHeight + "px"
    noButton.style.transform = `translate(${random(-300, 300)}%,${random(-300, 300)}%)`
})

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}