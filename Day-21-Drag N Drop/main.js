const fill = document.querySelector('.fill')
const emptys = document.querySelectorAll('.emty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of emptys) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
}

function dragEnd() {
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
}

function dragLeave() {
    console.log('drag leave')
}

function dragDrop() {
    this.className = 'emty'
    this.append(fill)
}
