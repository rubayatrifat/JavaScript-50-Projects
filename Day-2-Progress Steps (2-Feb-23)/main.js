const progress = document.getElementById('progress')
const nxtBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

nxtBtn.addEventListener('click', () => {
    currentActive++
    
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prevBtn.addEventListener('click', () => {
    currentActive--
    
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + "%" 

    if(currentActive === 1){
        prevBtn.disabled = true
    } else if(currentActive === circles.length) {
        nxtBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nxtBtn.disabled = false
    }
}