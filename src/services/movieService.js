import constants from '../constants.js'

export async function getNowPlaying() {
    const response = await fetch(constants.apiBaseUrl + `movie/now_playing?api_key=${constants.tmdbApiKey}&language=en-US&page=1`);
    const movies = await response.json();
    return movies;
}