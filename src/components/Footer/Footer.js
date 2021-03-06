import { useState } from 'react';

import './Footer.css';
import Notify from '../Shared/Notify/Notify';

function Footer() {
    const [notify, setNotify] = useState(false);
    const notificationMessage = "This feature will be implemented soon!";

    const onClickHandler = (e) => {
        if (e.target.tagName === 'I') {
            setNotify(true);
        }
        setTimeout(() => {
            setNotify(false);
        }, 5000);
    }

    return (
        <footer className="footer">
            <section className="footer-container">
                <section className="footer-container-icons">
                    {notify ? <Notify message={notificationMessage} /> : ''}
                    <p className="footer-container-icons-text">Soon on:</p>
                    <ul className="footer-container-icons-list" onClick={onClickHandler}>
                        <li className="footer-container-icons-list-element">
                            <i className="fab fa-facebook"></i>
                        </li>
                        <li className="footer-container-icons-list-element">
                            <i className="fab fa-instagram"></i>
                        </li>
                        <li className="footer-container-icons-list-element">
                            <i className="fab fa-twitter"></i>
                        </li>
                        <li className="footer-container-icons-list-element">
                            <i className="fab fa-youtube"></i>
                        </li>
                    </ul>
                </section>
            </section>
            <p className="footer-copyright">
                <a className="footer-copyright-link" href="https://github.com/IvayloSG/cinemate">&copy;CineMate - SoftUny final React Projec</a>
            </p>
        </footer>
    );
}

export default Footer;