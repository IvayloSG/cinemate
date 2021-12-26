import { Link, useNavigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext'
import './Header.css'

function Header() {
    const authData = useAuthContext();
    const navigate = useNavigate();

    const onClickLogoHandler = () => {
        navigate('/');
    }

    const userNav = (
        <ul className="header-nav-container-list">
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link" to="/">Home</Link>
            </li>
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link" to="/explore">Explore</Link>
            </li>
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link" to="/reviews">Reviews</Link>
            </li>
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link" to="/profile">My Place</Link>
            </li>
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link log-action" to="/logout">LogOut</Link>
            </li>
        </ul>
    );

    const guestNav = (
        <ul className="header-nav-container-list">
            <li className="header-nav-container-list-element">
                <Link className="header-nav-container-list-element-link" to="/">Home</Link>
            </li>
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
                <h2 className="header-nav-container-logo" onClick={onClickLogoHandler}>Cinemate</h2>
                {authData.user
                    ? userNav
                    : guestNav
                }
            </section>
        </nav>
    );
}

export default Header;