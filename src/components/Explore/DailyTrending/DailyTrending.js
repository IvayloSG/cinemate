import { useEffect, useState } from 'react';

import './DailyTrending.css';
import { getDailyTrendingMovies } from '../../../services/movieService.js';
import MovieCard from '../MovieCard/MovieCard';

function DailyTrending() {
  const [dailyTrending, setDailyTrending] = useState([]);

  useEffect(() => {
    let isMounted = true;

    getDailyTrendingMovies()
      .then((movies) => {
        if (isMounted) {
          setDailyTrending(movies.results);
        }
      });

    return () => isMounted = false;
  }, []);

  return (
    <section className="daily-trending-movies">
      {dailyTrending.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default DailyTrending;