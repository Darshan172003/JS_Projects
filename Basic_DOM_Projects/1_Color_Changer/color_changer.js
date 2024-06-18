
const body = document.querySelector('body');

const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);
        if (event.target.id === "ffb703") {
            body.style.backgroundColor = "#ffb703";
        }
        else if (event.target.id === "e63946") {
            body.style.backgroundColor = "#e63946";
        }
        else if (event.target.id === "f1faee") {
            body.style.backgroundColor = "#f1faee";
        }
        else if (event.target.id === "a8dadc") {
            body.style.backgroundColor = "#a8dadc";
        }
        else if (event.target.id === "_588157") {
            body.style.backgroundColor = "#588157";
        }
        else if (event.target.id === "_80ed99") {
            body.style.backgroundColor = "#80ed99";
        }

    })
})