import constants from '../constants.js'

export async function getNowPlaying() {
    const response = await fetch(constants.apiBaseUrl + `movie/now_playing?api_key=${constants.tmdbApiKey}&language=en-US&page=1`);
    const movies = await response.json();

    return movies;
}

export async function getPopularMovies() {
    const response = await fetch(constants.apiBaseUrl + `movie/popular?api_key=${constants.tmdbApiKey}&language=en-US&page=1`);
    const movies = await response.json();

    return movies;
};

export async function getTopRatedMovies() {
    const response = await fetch(constants.apiBaseUrl + `movie/top_rated?api_key=${constants.tmdbApiKey}&language=en-US&page=1`);
    const movies = await response.json();
    
    return movies;
};

export async function getUpcomingMovies() {
    const response = await fetch(constants.apiBaseUrl + `movie/upcoming?api_key=${constants.tmdbApiKey}&language=en-US&page=1`);
    const movies = await response.json();
    
    return movies;
};

export async function getDailyTrendingMovies() {
    const response = await fetch(constants.apiBaseUrl + `trending/movie/day?api_key=${constants.tmdbApiKey}&language=en-US&page=1`);
    const movies = await response.json();
    
    return movies;
};

export async function getWeeklyTrendingMovies() {
    const response = await fetch(constants.apiBaseUrl + `trending/movie/week?api_key=${constants.tmdbApiKey}`);
    const movies = await response.json();
    
    return movies;
};