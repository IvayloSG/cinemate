import { useEffect, useState } from 'react';

import './WeeklyTrending.css';
import { getWeeklyTrendingMovies } from '../../../services/movieService.js';
import MovieCard from '../MovieCard/MovieCard';

function WeeklyTrending() {
  const [weeklyTrending, setWeeklyTrending] = useState([]);

  useEffect(() => {
    let isMounted = true;

    getWeeklyTrendingMovies()
      .then((movies) => {
        if (isMounted) {
          setWeeklyTrending(movies.results);
        }
      });

    return () => isMounted = false;
  }, []);

  return (
    <section className="weekly-trending-movies">
      {weeklyTrending.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default WeeklyTrending;