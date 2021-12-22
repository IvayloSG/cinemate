import { useEffect, useState } from "react";

import MovieCard from '../MovieCard/MovieCard';
import { getDailyTrendingMovies } from "../../../services/movieService.js";
import "./DailyTrending.css";

function DailyTrending() {
  const [dailyTrending, setDailyTrending] = useState([]);

  useEffect(() => {
    getDailyTrendingMovies().then((movies) => {
        setDailyTrending(movies.results);
    });
  }, []);

  return (
    <section className="daily-trending-movies">
      {dailyTrending.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default DailyTrending;