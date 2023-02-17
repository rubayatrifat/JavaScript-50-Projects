const tagsElm = document.getElementById('tags')
const textArea = document.getElementById('text-area')

textArea.focus()

textArea.addEventListener('keyup', (evt) => {
    createTages(evt.target.value)
})

function createTages(input) {
    const tags = input.split(',').filter(tag => tag.trim() != '').map(tag => tag.trim())
    
    tagsElm.innerHTML = ''
    
    tags.forEach(tag => {
        const tagElm = document.createElement('span')
        tagElm.classList.add('tag')
        tagElm.innerText = tag
        tagsElm.appendChild(tagElm)
    });
}
