const insert = document.getElementById('insert')

window.addEventListener('keydown', (evt) => {
    insert.innerHTML = ` 
    <div class="key">
        ${evt.key === ' ' ? 'Space' : evt.key}
        <small>evt.key</small>
    </div>

    <div class="key">
        ${evt.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${evt.code}
        <small>event.code</small>
    </div>
`
})