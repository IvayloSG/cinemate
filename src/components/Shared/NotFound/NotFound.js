import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
    return (
        <section className="not-found">
            <article className="not-found-container">
                <div>
                    <div className="starsec"></div>
                    <div className="starthird"></div>
                    <div className="starfourth"></div>
                    <div className="starfifth"></div>
                </div>
                <div className="lamp-wrap">
                    <div className="lamp">
                        <div className="cable"></div>
                        <div className="cover"></div>
                        <div className="in-cover">
                            <div className="bulb"></div>
                        </div>
                        <div className="light"></div>
                    </div>
                </div>
                <section className="not-found-error">
                    <div className="not-found-error-content">
                        <div className="not-found-error-message message">
                            <h1 className="not-found-error-message-title">Page Not Found</h1>
                            <p className="not-found-error-message-text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
                        </div>
                        <div className="not-found-error-nav e-nav">
                            <Link to="/" className="e-nav-link"></Link>
                        </div>
                    </div>
                </section>
            </article>
        </section>
    );
}

export default NotFound;