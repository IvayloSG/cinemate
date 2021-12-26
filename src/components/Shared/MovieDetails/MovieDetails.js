import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import constants from '../../../constants.js';
import { useAuthContext } from '../../../contexts/AuthContext';
import { updateUserCollection } from '../../../services/authService.js';
import useMovieDetailsState from '../../../hooks/useMovieDetailsState.js';
import useUserInfoState from '../../../hooks/useUserInfoState.js';
import './MovieDetails.css'

function MovieDetails() {
    const { movieId } = useParams();
    const authData = useAuthContext();
    const [movieDetails] = useMovieDetailsState(movieId);
    const [userInfo] = useUserInfoState(authData.user);
    const [isMovieInWatchList, setIsMovieInWatchList] = useState(false);

    console.log(userInfo);
    if (userInfo && userInfo.watchList && userInfo.watchList.find(x => x.movieId === movieId) && !isMovieInWatchList) {
        setIsMovieInWatchList(true);
    }

    let countryElementPrefix = '';
    if (movieDetails.production_countries) {
        countryElementPrefix = movieDetails.production_countries.length > 1 ? 'Countries' : 'Country';
    }

    const watchListAddClickHandler = async() => {
        if (!authData.user) {
            return;
        }
        if (isMovieInWatchList) {
            return;
        }

        const movieData = {
            movieId: movieId,
            movieTitle: movieDetails.title,
            movieCover: movieDetails.poster_path
        };
        userInfo.watchList.push(movieData);
        await updateUserCollection(userInfo);
        setIsMovieInWatchList(true);
    }

    const watchListRemoveClickHandler = async() => {
        if (!authData.user) {
            return;
        }

        const removeIndex = userInfo.watchList.findIndex(movie => movie.movieId === movieId);
        userInfo.watchList.splice(removeIndex, 1);

        await updateUserCollection(userInfo);
        setIsMovieInWatchList(false);
    }

    return (
        <section className="movie-details">
            <section className="movie-details-img">
                <img
                    className="movie-details-img-picture"
                    src={constants.apiImageUrl + movieDetails.poster_path}
                    alt="movie-poster"
                />
            </section>

            <section className="movie-details-content">
                <header className="movie-details-content-header">
                    <article className="movie-details-content-header-titles">
                        <h1 className="movie-details-content-header-title">{movieDetails.title}</h1>
                        <h3 className="movie-details-content-header-subtitle">Original title: {movieDetails.original_title}</h3>
                        <p className="movie-details-content-header-date">Release date: {movieDetails.release_date}</p>
                    </article>
                    <article className="movie-details-content-header-additional-info">
                        <p className="movie-details-content-header-additional-info-status">{movieDetails.status}</p>
                        <p className="movie-details-content-header-additional-info-rating">Popularity: {movieDetails.popularity}</p>
                        <p className="movie-details-content-header-additional-info-rating">Votes: {movieDetails.vote_count}</p>
                        <p className="movie-details-content-header-additional-info-rating">Rating: {movieDetails.vote_average}/10</p>
                    </article>
                </header>

                <article className="movie-details-content-info">
                    <article className="movie-details-content-info-wraper">
                        <article className="movie-details-content-info-genres">
                            {movieDetails.genres
                                ? movieDetails.genres.map(genre => <p key={genre.id} className='movie-details-content-info-genre'>{genre.name}</p>)
                                : ''
                            }
                            <p className="movie-details-content-info-url">
                                <a
                                    className="movie-details-content-info-url-link"
                                    href={movieDetails.homepage}
                                    target="_blank"
                                    rel="noreferrer">
                                    {movieDetails.homepage}
                                </a>
                            </p>
                        </article>
                        <article className="movie-details-content-origin">
                            {movieDetails.production_countries
                                ? <p className="movie-details-content-origin-text">{countryElementPrefix}: {movieDetails.production_countries.map(country => country.name).join(', ')}</p>
                                : ''
                            }
                            {movieDetails.production_companies
                                ? <p className="movie-details-content-origin-text">{movieDetails.production_companies.map(company => company.name).join(', ')}</p>
                                : ''
                            }
                            <p className="movie-details-content-origin-text">Budget: {movieDetails.budget}$</p>
                            <p className="movie-details-content-origin-text">Revenue: {movieDetails.revenue}$</p>
                        </article>
                    </article>
                    <p className="movie-details-content-info-description">{movieDetails.overview}</p>
                    <div className="movie-details-content-info-button-wraper">
                        <Link to="/reviews/create" state={{ movie: movieDetails }} className="movie-details-content-info-button">Create Review</Link>
                        {isMovieInWatchList
                            ? <button className="movie-details-content-info-button" onClick={watchListRemoveClickHandler}>Remove from watchlist</button>
                            : <button className="movie-details-content-info-button" onClick={watchListAddClickHandler}>Add to watchlist</button>
                        }
                    </div>
                </article>
            </section>
        </section>
    );
}

export default MovieDetails;