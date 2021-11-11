function showMovie(data) {
    const createElement = document.querySelector('.movies');
    data.films.forEach(movie => {
        const movieElement = document.createElement('li');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <div>
           <img src='${movie.posterUrlPreview}' /> 
        </div>
        `;
        createElement.appendChild(movieElement);
    })
};

function showMovieBest(data) {
    const createElement = document.querySelector('.movies__best');
    data.films.forEach(movie => {
        const movieElement = document.createElement('li');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <div>
           <img src='${movie.posterUrlPreview}' /> 
        </div>
        `;
        createElement.appendChild(movieElement);
    })
}

export { showMovie, showMovieBest };

{/* <h2>${movie.nameRu}</h2> */ }
            // <p>Жанр: ${movie.genres.map((genre) => `${genre.genre}`)}</p>