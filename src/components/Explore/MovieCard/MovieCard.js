import { useNavigate } from 'react-router-dom';

import constants from "../../../constants.js";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/details/${movie.id}`)
  }

  return (
    <section className="movie-card" onClick={onClickHandler}>
      <article className="movie-card-img">
        <img
          className="movie-card-img-picture"
          src={constants.apiImageUrl + movie.poster_path}
          alt="movie-poster"
        />
      </article>
      <article className="movie-card-content">
        <h1 className="movie-card-content-title">{movie.title}</h1>
        <p className="movie-card-content-description">{movie.overview}</p>
        <div className="movie-card-content-score">
          <p className="movie-card-content-votes">Votes {movie.vote_count}</p>
          <p className="movie-card-content-rating"> Rating {movie.vote_average}</p>
        </div>
      </article>
    </section>
  );
}

export default MovieCard;
