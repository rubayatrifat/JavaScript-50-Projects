const container = document.querySelector('.container')
const splitLeft = document.querySelector('.left')
const splitRight = document.querySelector('.right')
const reset = document.querySelector('.reset')

reset.classList.add('d-none')

splitLeft.addEventListener('click', () => {
    container.classList.add('click-left')
    container.classList.remove('click-right')
    reset.classList.add('go-right')
    reset.classList.remove('go-left')
    container.classList.remove('web-reseted')
    container.classList.remove('go-reseted')
    reset.classList.remove('d-none')
    reset.classList.add('d-block')
})

splitRight.addEventListener('click', () => {
    container.classList.add('click-right')
    container.classList.remove('click-left')
    reset.classList.add('go-left')
    reset.classList.remove('go-right')
    container.classList.remove('web-reseted')
    container.classList.remove('go-reseted')
    reset.classList.remove('d-none')
    reset.classList.add('d-block')
})

reset.addEventListener('click', () => {
    container.classList.add('web-reseted')
    container.classList.add('go-reseted')
    reset.classList.add('d-none')
    reset.classList.remove('d-block')
})