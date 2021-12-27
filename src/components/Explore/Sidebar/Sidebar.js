import { Link } from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {
  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-element">
          <Link className="sidebar-list-element-link" to="/explore">
            Popular
          </Link>
        </li>
        <li className="sidebar-list-element">
          <Link className="sidebar-list-element-link" to="/explore/toprated">
            Top Rated
          </Link>
        </li>
        <li className="sidebar-list-element">
          <Link className="sidebar-list-element-link" to="/explore/upcomming">
            Upcomming
          </Link>
        </li>
        <li className="sidebar-list-element">
          <Link className="sidebar-list-element-link" to="/explore/weekly">
            Weekly Trending
          </Link>
        </li>
        <li className="sidebar-list-element">
          <Link className="sidebar-list-element-link" to="/explore/daily">
            Daily Trending
          </Link>
        </li>
      </ul>
      <article className="sidebar-scroll-up">
        <i className="fas fa-chevron-circle-up" onClick={clickHandler}></i>
      </article>
    </aside>
  );
}

export default Sidebar;