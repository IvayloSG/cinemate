import constants from '../../../../constants'
import './NowPlayingMovie.css';

function NowPlayingMovie({ movie }) {
    return (
        <article className="now-playing-movie">
            <section className="now-playing-movie-picture-container">
                <img className="now-playing-movie-picture" src={constants.apiImageUrl + movie.poster_path} alt="movie-cover" />
            </section>
            <section className="now-playing-movie-content">
                <h3 className="now-playing-movie-content-title">{movie.original_title}</h3>
                <div className="now-playing-movie-content-title-details">
                    <p className="now-playing-movie-content-title-ratings-votes">Votes {movie.vote_count}</p>
                    <p className="now-playing-movie-content-title-ratings-rating">Rating {movie.vote_average}</p>
                </div>
            </section>
        </article>
    );
}

export default NowPlayingMovie;