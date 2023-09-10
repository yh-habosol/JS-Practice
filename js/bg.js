// const images = ["1.jpg", "2.jpg", "3.jpg"];

const colors = ["#5E1EAB", "#FFC7C8", "#9499FF"];
const color = colors[Math.floor(Math.random()*colors.length)];

const body = document.body;
body.style.backgroundColor = color;


// body.style.backgroundImage = `url(./img/${image})`;
// const bgImg = document.createElement("img");
// bgImg.src = `./img/${image}`;
// document.body.appendChild(bgImg);
