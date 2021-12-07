import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <nav className="header-nav">
            <section className="header-nav-container">
                <h2 className="header-nav-container-logo">Cinemate</h2>
                <ul className="header-nav-container-list">
                    <li className="header-nav-container-list-element">
                        <Link className="header-nav-container-list-element-link" to="/">Home</Link>
                    </li>
                    <li className="header-nav-container-list-element">
                        <Link className="header-nav-container-list-element-link" to="/explore">Explore</Link>
                    </li>
                    <li className="header-nav-container-list-element">MyPlace</li>
                    <li className="header-nav-container-list-element log-action">Logout</li>
                    <li className="header-nav-container-list-element log-action">Login</li>
                    <li className="header-nav-container-list-element">Register</li>
                </ul>
            </section>
        </nav>
    );
}

export default Header;