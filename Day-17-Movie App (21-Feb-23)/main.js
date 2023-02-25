const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cab5556b2b2a1eef47b0e69a58f66e7b&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=cab5556b2b2a1eef47b0e69a58f66e7b&query="'
const form = document.getElementById('form')
const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieElm = document.createElement('div')
        movieElm.classList.add('movie')
        movieElm.innerHTML = `

            <div class="movie">
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="over-view">
                    <h3>Overview</h3>
                    <p>${overview}</p>
                </div>
            </div>
    
        `
        main.appendChild(movieElm)

    })

}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

// Search button

const searchButton = document.querySelector('.search-ico')
const searchIcon = document.querySelector('.search-ico i')
const searchElm = document.querySelector('.search')

searchButton.addEventListener('click', (evt) => {
    evt.preventDefault()

    searchElm.focus()

    searchElm.classList.toggle('active')

    searchButton.classList.toggle('active')

    searchIcon.classList.toggle('fa-times')

})