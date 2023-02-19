const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentege = document.getElementById('percentence')
const remaided = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => hilightcups(idx))
})

function hilightcups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }


    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentege.style.visibility = 'hidden'
        percentege.style.height = 0
    }else {
        percentege.style.visibility = "visible"
        percentege.style.height = `${fullCups / totalCups * 330}px`
        percentege.innerHTML = `${Math.ceil(fullCups / totalCups * 100)}%`
    }

    if(fullCups === totalCups) {
        remaided.style.visibility = "hidden"
        remaided.style.height = 0
    }else {
        remaided.style.visibility = "visible"
        liters.innerText = `${ 2 - (250 * fullCups / 1000)}L` 
    }
}