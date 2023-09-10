const clock = document.querySelector(".clock");



const paintClock = () => {
    const date = new Date();

    const hour = `${date.getHours()}`.padStart(2, "0");
    const minute = `${date.getMinutes()}`.padStart(2, "0");
    const second = `${date.getSeconds()}`.padStart(2, "0");

    clock.innerText = `${hour}:${minute}:${second}`;
}


paintClock();
setInterval(paintClock, 1000);