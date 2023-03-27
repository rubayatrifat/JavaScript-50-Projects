const passElm = document.getElementById('password')
const bg = document.getElementById('background')

passElm.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2

    bg.style.filter = `blur(${blurValue}px)`
})