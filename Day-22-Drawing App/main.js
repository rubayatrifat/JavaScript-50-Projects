const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const drawColor = document.querySelector('#color');
const inCrement = document.getElementById('increase');
const deCrement = document.getElementById('decrese');
const sizeElm = document.getElementById('size');
const clearButton = document.getElementById('clear');
const downloadBtn = document.getElementById('download');


let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (evt) => {
  isPressed = true;

  x = evt.offsetX;
  y = evt.offsetY;
});

canvas.addEventListener('mouseup', (evt) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (evt) => {
  if(isPressed) {
    const x2 = evt.offsetX;
    const y2 = evt.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y)  {
  color = drawColor.value;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); 
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  color = drawColor.value;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

inCrement.addEventListener('click', () => {
  if(size >= 100) {
    return;
  }
  size = size + 5;
  sizeElm.innerText = `${size}`;
});

deCrement.addEventListener('click', () => {
  if(size <= 5) {
    return;
  }
  size = size - 5;
  sizeElm.innerText = `${size}`;
});

clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const sizeInerElm = `${size}`;
sizeElm.innerText = sizeInerElm;

downloadBtn.addEventListener('click', downloadCanvas);
function downloadCanvas() {
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}