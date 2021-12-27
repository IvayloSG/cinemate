import { useNavigate } from 'react-router-dom';

import './WatchListCard.css';
import constants from '../../../constants';

function WatchListCard({ movie }) {
    const navigate = useNavigate();

    const watchListCardOnClickHandler = () => {
        navigate(`/details/${movie.movieId}`)
    }

    return (
        <article className='watch-list-card' onClick={watchListCardOnClickHandler}>
            <section className="watch-list-card-img">
                <img
                    className="watch-list-card-img-picture"
                    src={constants.apiImageUrl + movie.movieCover}
                    alt="movie-poster"
                />
            </section>
            <section className="watch-list-card-content">
                <h1 className="watch-list-card-content-title">{movie.movieTitle}</h1>
            </section>
        </article>
    );
}

export default WatchListCard;