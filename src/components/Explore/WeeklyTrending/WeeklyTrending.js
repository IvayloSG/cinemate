import { useEffect, useState } from "react";

import MovieCard from '../MovieCard/MovieCard';
import { getWeeklyTrendingMovies } from "../../../services/movieService.js";
import "./WeeklyTrending.css";

function WeeklyTrending() {
  const [weeklyTrending, setWeeklyTrending] = useState([]);

  useEffect(() => {
    getWeeklyTrendingMovies().then((movies) => {
        setWeeklyTrending(movies.results);
    });
  }, []);

  return (
    <section className="weekly-trending-movies">
      {weeklyTrending.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default WeeklyTrending;