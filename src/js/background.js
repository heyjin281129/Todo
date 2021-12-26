const imges = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = imges[Math.floor(Math.random()*imges.length)];

const bgImage = document.createElement("img");

bgImage.src = `src/img/${chosenImage}`;

console.log(bgImage.src);

document.body.appendChild(bgImage);