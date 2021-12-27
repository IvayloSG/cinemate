import { Navigate, Routes, Route } from 'react-router-dom';

import './Explore.css';
import { useAuthContext } from '../../contexts/AuthContext';
import DailyTrending from './DailyTrending/DailyTrending';
import PopularMovies from './PopularMovies/PopularMovies';
import Sidebar from './Sidebar/Sidebar';
import TopRated from './TopRated/TopRated';
import Upcomming from './Upcoming/Upcoming';
import WeeklyTrending from './WeeklyTrending/WeeklyTrending';

function Explore() {
  const authData = useAuthContext();

  if (!authData.user) {
    return(<Navigate to="/login"></Navigate>)
  }

  return (
    <section className="explore">
      <section className="explore-movies">
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/upcomming" element={<Upcomming />} />
          <Route path="/weekly" element={<WeeklyTrending />} />
          <Route path="/daily" element={<DailyTrending />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
      </section>
      <section className="explore-sidebar">
        <Sidebar />
      </section>
    </section>
  );
}

export default Explore;
