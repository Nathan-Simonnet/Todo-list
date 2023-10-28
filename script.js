const form = document.querySelector('form');
const input = document.querySelector('input[type="text"');
const ul = document.querySelector('ul');
const liInstructions = document.getElementById('li-instructions');
const button = document.querySelector('button');

let leftIndex = 380;

const flowerGenerator = function () {
    const flower = document.createElement("span")
    flower.classList.add("flowers")
    form.appendChild(flower);

    flower.style.left = leftIndex + "px"
    leftIndex -= 52;
    console.log(leftIndex)

    setTimeout(() => {
        flower.remove();
    }, 3000)
}

const flowerInterval = function () {
    const flowerinterval = setInterval(() => {
        flowerGenerator();
    }, 50)

    setTimeout(() => {
        clearInterval(flowerinterval)

    }, 400)

    setTimeout(() => {
        document.body.style.overflow = "visible"
    }, 5000)

    document.body.style.overflow = "hidden"
}

const storing = function () {
    window.localStorage.list = ul.innerHTML.trim();
    console.log(window.localStorage.list.length)
}

const restoring = function () {

    if (window.localStorage.list && window.localStorage.list.length > 0) {
        ul.innerHTML = window.localStorage.list
    } else {
        ul.innerHTML = `
    <li id="li-instructions">One click to
                    check, one more to delete</li>
    `
        storing();
    }
}

const liPointerAndEvent = function () {
    const lis = document.querySelectorAll('li');

    lis.forEach((li) => {
        li.addEventListener('click', (e) => {
            if (li.classList.contains("checked")) {
                li.remove()
                storing();
                if (li.id === "li-instructions") {
                    console.log("ey")
                    storing();
                    flowerInterval();
                }

            } else {
                li.classList.add("checked")
                storing();
            }
        });
    });
}

const liAdder = function () {
    ul.innerHTML += `
    <li>${input.value}</li>
    `
    input.value = "";
    liPointerAndEvent();
}

window.addEventListener('load', () => {
    restoring();
    liPointerAndEvent();
});

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (input.value.length > 0) {
        liAdder();
        storing();
    }
});



