const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// initial starting point for ball
let x = canvas.width / 2;
let y = canvas.height - 30;

// add to initial starting point to get ball to move
let dx = 2;
let dy = -2;

function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}

setInterval(draw, 10);
