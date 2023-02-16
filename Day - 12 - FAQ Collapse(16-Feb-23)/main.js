const singleFaq = document.querySelectorAll('.single-faq')

singleFaq.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active')
    })
})