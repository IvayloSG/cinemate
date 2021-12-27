import { useEffect, useState } from 'react';

import './Upcoming.css';
import { getUpcomingMovies } from '../../../services/movieService.js';
import MovieCard from '../MovieCard/MovieCard';

function Upcoming() {
  const [upcomming, setUpcoming] = useState([]);

  useEffect(() => {
    let isMounted = true;

    getUpcomingMovies()
      .then((movies) => {
        if (isMounted) {
          setUpcoming(movies.results);
        }
      });

    return () => isMounted = false;
  }, []);

  return (
    <section className="upcoming-movies">
      {upcomming.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default Upcoming;