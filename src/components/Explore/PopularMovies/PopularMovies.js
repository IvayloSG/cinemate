import { useEffect, useState } from "react";

import "./PopularMovies.css";
import { getPopularMovies } from "../../../services/movieService.js";
import MovieCard from '../MovieCard/MovieCard';

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getPopularMovies()
      .then((movies) => {
        if (isMounted) {
          setPopularMovies(movies.results);
        }
      });

    return () => isMounted = false;
  }, []);

  return (
    <section className="popular-movies">
      {popularMovies.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default PopularMovies;