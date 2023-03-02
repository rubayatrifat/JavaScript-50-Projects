const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (evt) {
        const x = evt.clientX
        const y = evt.clientY

        const buttonTop = evt.target.offsetTop
        const buttonLeft = evt.target.offsetLeft


        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle) 

        setTimeout(() => circle.remove(), 500)
    })
} )