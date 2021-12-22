import { useEffect, useState } from "react";

import MovieCard from '../MovieCard/MovieCard';
import { getPopularMovies } from "../../../services/movieService.js";
import "./PopularMovies.css";

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      setPopularMovies(movies.results);
    });
  }, []);

  console.log(popularMovies);

  return (
    <section className="popular-movies">
      {popularMovies.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default PopularMovies;
