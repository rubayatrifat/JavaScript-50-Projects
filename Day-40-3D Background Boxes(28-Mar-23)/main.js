const addingClass = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    addingClass.classList.toggle('big')
})