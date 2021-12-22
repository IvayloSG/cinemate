import { useEffect, useState } from "react";

import MovieCard from '../MovieCard/MovieCard';
import { getTopRatedMovies } from "../../../services/movieService.js";
import "./TopRated.css";

function TopRated() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      setTopRated(movies.results);
    });
  }, []);

  return (
    <section className="top-rated-movies">
      {topRated.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default TopRated;