const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const drawColor = document.querySelector('#color')

let size = 20
let isPressed = false;
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (evt) => {
    isPressed = true

    x = evt.offsetX
    y = evt.offsetY
})

canvas.addEventListener('mouseup', (evt) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (evt) => {
    if(isPressed) {
        const x2 = evt.offsetX
        const y2 = evt.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y)  {
    color = drawColor.value
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); 
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    color = drawColor.value
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color 
    ctx.lineWidth = size * 2
    ctx.stroke()
}
