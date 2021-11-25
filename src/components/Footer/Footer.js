import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <section className="footer-container">
                <section className="footer-container-icons">
                    <p className="footer-container-icons-text">Soon on:</p>
                    <ul className="footer-container-icons-list">
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