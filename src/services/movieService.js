import constants from '../constants.js'

export async function getNowPlaying() {
    return fetch(constants.apiBaseUrl + `movie/now_playing?api_key=${constants.tmdbApiKey}&language=en-US&page=1`)
        .then(response => response.json())
}

export function getPopularMovies() {
    return fetch(constants.apiBaseUrl + `movie/popular?api_key=${constants.tmdbApiKey}&language=en-US&page=1`)
        .then(response => response.json())
};

export function getTopRatedMovies() {
    return fetch(constants.apiBaseUrl + `movie/top_rated?api_key=${constants.tmdbApiKey}&language=en-US&page=1`)
        .then(response => response.json())
};

export function getUpcomingMovies() {
    return fetch(constants.apiBaseUrl + `movie/upcoming?api_key=${constants.tmdbApiKey}&language=en-US&page=1`)
        .then(response => response.json())
};

export function getDailyTrendingMovies() {
    return fetch(constants.apiBaseUrl + `trending/movie/day?api_key=${constants.tmdbApiKey}&language=en-US&page=1`)
        .then(response => response.json())
};

export function getWeeklyTrendingMovies() {
    return fetch(constants.apiBaseUrl + `trending/movie/week?api_key=${constants.tmdbApiKey}`)
        .then(response => response.json())
};

export function getMovieDetailsById(movieId) {
    return fetch(constants.apiBaseUrl + `movie/${movieId}?api_key=${constants.tmdbApiKey}&language=en-US`)
        .then(response => response.json())
}
