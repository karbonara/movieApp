function showMovie(data) {
    const createElement = document.querySelector('.movies');
    data.films.forEach(movie => {
        const movieElement = document.createElement('li');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <div>
           <img src='${movie.posterUrlPreview}' /> 
           <h2>${movie.nameRu}</h2>
        </div>
        `;
        createElement.appendChild(movieElement);
    })
};
function showMovieError() {
    const createElementError = document.querySelector('.error');
    const movieElementError = document.createElement('div');
    movieElementError.classList.add('error__title')
    movieElementError.innerHTML = `<h1>Не удалось загрузить данные</h1>`
    createElementError.appendChild(movieElementError)
}
function showMovieBest(data) {
    const createElement = document.querySelector('.movies__best');
    data.films.forEach(movie => {
        const movieElement = document.createElement('li');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <div>
           <img src='${movie.posterUrlPreview}' /> 
           <h2>${movie.nameRu}</h2>
        </div>
        `;
        createElement.appendChild(movieElement);
    })
}
export { showMovie, showMovieBest, showMovieError };
