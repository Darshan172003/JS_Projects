// change background color

const changeColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
// console.log(changeColor());

let intervalId;
const StarChangingColor = function () {
    const changBG = function () {
        document.body.style.backgroundColor = changeColor();
    }
    
    if (!intervalId){  
        intervalId = setInterval(changBG, 1000);
    }
}

const StopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;

}

document.querySelector("#button1").addEventListener("click", StarChangingColor);
document.querySelector("#button2").addEventListener("click", StopChangingColor);
