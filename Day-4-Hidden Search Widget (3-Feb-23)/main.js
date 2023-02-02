const serchBtn = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const icon = document.querySelector('i')

serchBtn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})