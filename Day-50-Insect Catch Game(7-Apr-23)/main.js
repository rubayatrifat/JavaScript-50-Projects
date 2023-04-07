const screens = document.querySelectorAll('.screen')
const chose_insect_btn = document.querySelectorAll('.chose-insect-btn')
const start_btn = document.querySelector('#start-btn')
const timeEl = document.querySelector('#time')
const scoreEl = document.querySelector('#score')
const messageEl = document.querySelector('#message')
const game_contanier = document.querySelector('.game-container')

let scoundes = 0
let score = 0
let selected_insect = {}


start_btn.addEventListener('click', () => screens[0].classList.add('up'))

chose_insect_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        selected_insect = {src}
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(scoundes / 60)
    let s = scoundes % 60
    m = m < 10 ? `0${m}` : m 
    s = s < 10 ? `0${s}` : s 
    timeEl.innerHTML = `Time: ${m}:${s}`
    scoundes++
}

function createInsect() {
    const insect =  document.createElement('div')
    insect.classList.add('insect')
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)

    game_contanier.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return {x, y}
}

