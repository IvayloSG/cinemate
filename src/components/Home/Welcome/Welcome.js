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
                    Some very nice and inspiring text. That will explain how great is the
                    product and how much it will help my development as a programmer.
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