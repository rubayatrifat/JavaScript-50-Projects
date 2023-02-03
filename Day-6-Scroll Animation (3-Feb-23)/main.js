const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', chekBoxes)

chekBoxes()

function chekBoxes() {
    const tiggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < tiggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

}


