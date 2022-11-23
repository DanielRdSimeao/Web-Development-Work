// MUDANDO TEMA E SALVANDO (Dark mode / Ligth mode)
const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

window.onload = getThemeFromLocalStorage

const lightTheme = {
    '--background-color': '#FFF',
    '--text-color': '#1A1A1A',
    '--button-background-color': '#9B8AFB',
}

const darkTheme = {
    '--background-color': '#1A1A1A',
    '--text-color': '#FFF',
    '--button-background-color': '#5925DC',
}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme) {
    for (let [prop, value] of Object.entries(theme)) {
        changeProperty(prop, value)
    }
    saveThemeToLocalStorage(theme)
}

function changeProperty(prop, value) {
    rootElement.style.setProperty(prop, value)
}

function saveThemeToLocalStorage(theme) {
    localStorage.setItem('theme', JSON.stringify(theme))
}

function getThemeFromLocalStorage() {
    const theme = JSON.parse(localStorage.getItem('theme'))
    if (isThemeEqual(theme, darkTheme)) inputContainer.checked = true
    changeTheme(theme)
}

function isThemeEqual(firstTheme, secondTheme) {
    for (let prop in firstTheme) {
        if (firstTheme[prop] != secondTheme[prop])
        return false
    }
    return true
}


// MUDANDO IMAGENS (rotativas)
let time = 2000,
currentImageIndex = 0,
images = document
.querySelectorAll("#slider img")
max = images.length;

function nextImage() {
    
    images[currentImageIndex]
    .classList.remove("selected")
    
    currentImageIndex++
    
    if(currentImageIndex >= max)
    currentImageIndex = 0
    
    images[currentImageIndex]
    .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)


/* TESTES (ABAIXO)*/

function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";
    setTimeout(function() {
        if (boxes.length > 5) {
            tmpNode.classList.add("box--hide");
            boxes[5].className = "box move-to-position5-from-left";
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";
        boxes[3].className = "box move-to-position3-from-left";
        boxes[4].className = "box move-to-position4-from-left";
        boxes[0].remove();
        document.querySelector(".cards__container").appendChild(tmpNode);
    }, 500);
    }
    function shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[4].className = "box move-out-from-right";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 4) {
            boxes[4].className = "box box--hide";
        }
        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position1-from-right";
        boxes[0].className = "box move-to-position2-from-right";
        boxes[1].className = "box move-to-position3-from-right";
        boxes[2].className = "box move-to-position4-from-right";
        boxes[3].className = "box move-to-position5-from-right";
    }, 500);
    }

/* TESTES (ACIMA) */