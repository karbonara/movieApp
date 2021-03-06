import { showMovie, showMovieBest, showMovieError } from './card.js';
const API_KEY = '211c56c9-1c35-41e5-ae1e-8761e5a40fe9';
const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
const API_URL_BEST = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1';
async function getMovies() {
    try {
        const resp = await fetch(API_URL_POPULAR, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        });
        const respData = await resp.json();
        showMovie(respData);
    } catch {
        showMovieError();
    }
};
async function getMoviesBest() {
    try {
        const resp = await fetch(API_URL_BEST, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        });
        const respData = await resp.json();
        showMovieBest(respData);
    } catch {

    }
};
export { getMovies, getMoviesBest };