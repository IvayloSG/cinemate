import { useEffect, useState } from "react";

import MovieCard from '../MovieCard/MovieCard';
import { getUpcomingMovies } from "../../../services/movieService.js";
import "./Upcoming.css";

function Upcoming() {
  const [upcomming, setUpcoming] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
        setUpcoming(movies.results);
    });
  }, []);

  return (
    <section className="upcoming-movies">
      {upcomming.map(m => <MovieCard key={m.id} movie={m} />)}
    </section>
  );
}

export default Upcoming;