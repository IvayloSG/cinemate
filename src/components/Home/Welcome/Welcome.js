import { Link } from 'react-router-dom'

import { useAuthContext } from '../../../contexts/AuthContext';
import './Welcome.css'

function Welcome() {
    const authData = useAuthContext();

    const signButtons = (
        <div className="welcome-content-buttons">
            <Link to="/register" className="welcome-content-buttons-button log-action">Register</Link>
            <Link to="/login" className="welcome-content-buttons-button log-action">Log In</Link>
        </div>
    );

    return (
        <section className="welcome">
            <div className="welcome-picture-container">
                <img className="welcome-picture" src="https://i.postimg.cc/DmkcYpY3/Welcome-Header-Pic.jpg" alt="cinema pic" />
            </div>
            <article className="welcome-content">
                <h1 className="welcome-content-title">Welcome to Cinemate</h1>
                <p className="welcome-content-text">
                    Cinemate was started as final project for Front End Development module at 
                    <a href="https://www.softuni.bg" className="welcome-link-element"> SoftUni</a>.
                    Here you can find everything about newcomming and most popular movies, you can read 
                    reviews about them, or just have great time. The project would not be possible without 
                    <a href="https://www.themoviedb.org/" className="welcome-link-element"> TMDB</a>. 
                    They are absolutely great and free!
                </p>
                {authData.user
                    ? ''
                    : signButtons
                }
            </article>
        </section>
    );
}

export default Welcome;