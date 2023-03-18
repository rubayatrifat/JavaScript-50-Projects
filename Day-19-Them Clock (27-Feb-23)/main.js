const hourELm = document.querySelector('.hour')
const minuteElm = document.querySelector('.minute')
const scoundElm = document.querySelector('.scound')
const timeElm = document.querySelector('.time')
const dateElm = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday"]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener('click', (e) => {
    const hmtl = document.querySelector('html')

    if(hmtl.classList.contains('dark')) {
        hmtl.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        hmtl.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})