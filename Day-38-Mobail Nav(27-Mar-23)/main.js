const contents = document.querySelectorAll('.content')
const listItem = document.querySelectorAll('nav ul li')

listItem.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems() 

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))   
}

function hideAllItems() {
    listItem.forEach(item => item.classList.remove('active'))   
}