import { Link } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext'
import './Header.css'

function Header() {
    const user = useAuthContext();
    console.log(user);

    const userNav = (
        <ul className="header-nav-container-list">
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link" to="/">Home</Link>
            </li>
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link" to="/explore">Explore</Link>
            </li>
            <li className="header-nav-container-list-element">MyPlace</li>
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link log-action" to="/logout">LogOut</Link>
            </li>
        </ul>
    );

    const guestNav = (
        <ul className="header-nav-container-list">
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link log-action" to="/login">Login</Link>
            </li>
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link" to="/register">Register</Link>
            </li>
        </ul>
    );

    return (
        <nav className="header-nav">
            <section className="header-nav-container">
                <h2 className="header-nav-container-logo">Cinemate</h2>
                {user.user
                    ? userNav
                    : guestNav
                }
            </section>
        </nav>
    );
}

export default Header;