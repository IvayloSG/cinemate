import { useEffect, useState } from 'react';

import './TopRated.css';
import { getTopRatedMovies } from '../../../services/movieService.js';
import MovieCard from '../MovieCard/MovieCard';

function TopRated() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    let isMounted = true;

    getTopRatedMovies()
      .then((movies) => {
        if (isMounted) {
          setTopRated(movies.results);
        }
      });

    return () => isMounted = false;
  }, []);

  return (
    <section className="top-rated-movies">
      {topRated.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default TopRated;