import { Routes, Route, Navigate } from "react-router-dom";

import DailyTrending from "./DailyTrending/DailyTrending";
import PopularMovies from "./PopularMovies/PopularMovies";
import TopRated from "./TopRated/TopRated";
import Sidebar from "./Sidebar/Sidebar";
import Upcomming from "./Upcoming/Upcoming";
import WeeklyTrending from "./WeeklyTrending/WeeklyTrending";
import "./Explore.css";

function Explore() {
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
