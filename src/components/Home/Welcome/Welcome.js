import { Link } from 'react-router-dom'
import './Welcome.css'

function Welcome() {
    return (
        <section className="welcome">
            <article className="welcome-content">
                <h1 className="welcome-content-title">Welcome to Cinemate</h1>
                <p className="welcome-content-text">
                    Some very nice and inspiring text. That will explain how great is the
                    product and how much it will help my development as a programmer.
                </p>
                <div className="welcome-content-buttons">
                    <Link to="/register" className="welcome-content-buttons-button">Register</Link>
                    <Link to="/login" className="welcome-content-buttons-button">Log In</Link>
                </div>
            </article>
            <div className="welcome-picture-container">
                <img className="welcome-picture" src="https://i.postimg.cc/DmkcYpY3/Welcome-Header-Pic.jpg" alt="cinema pic" />
            </div>
        </section>
    );
}

export default Welcome;