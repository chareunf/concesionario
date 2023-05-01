const images = [
    "assets/img/uno.jpg",
    "assets/img/dos.jpg",
    "assets/img/tres.jpg",
]

let index = 0
const max = images.length


const containerElement = document.querySelector(".container")
const prevSlideButton = document.querySelector(".prevSlide ")
const nextSlideButton = document.querySelector(".nextSlide")



function setImageIndex() {
    if (index < 0) index = max - 1
    if (index === max) index = 0
}

function changeBackgroundImage(backgroundImage, element) {

    element.style.backgroundImage = `url(${backgroundImage})`
}


document.addEventListener("click", function (e) {
    if (e.target.matches(".prevSlide *")) {
        index--

        setImageIndex()
        changeBackgroundImage(images[index], containerElement)
    }

    if (e.target.matches(".nextSlide *")) {
        index++
        setImageIndex()
        changeBackgroundImage(images[index], containerElement)

    }
})