const form = document.querySelector('form');
const input = document.querySelector('input[type="text"');
const ul = document.querySelector('ul');

const storing = function () {
    window.localStorage.list = ul.innerHTML;
}

const restoring = function () {

    if (window.localStorage.list) {
        ul.innerHTML = window.localStorage.list
    }

}

const liPointerAndEvent = function () {
    const lis = document.querySelectorAll('li');

    lis.forEach((li) => {
        li.addEventListener('click', (e) => {
            if (li.classList.contains("checked")) {
                li.remove()
            } else {
                li.classList.add("checked")
            }
            storing();
        });
    });
}

const liAdder = function (event) {
    console.log(input.value)
    ul.innerHTML += `
    <li>${input.value}</li>
    `
    input.value = "";
    liPointerAndEvent();
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (input.value.length > 0) {
        liAdder();
        storing();
    }
});



window.addEventListener('load', () => {
    liPointerAndEvent();
    restoring();
});




