import './Footer.css';
import { Link } from 'react-router-dom'

function Footer ({ storeName, description, contactEmail, contactPhone, copyright }) {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
            <h3 className="footer-heading">{storeName}</h3>
            <p className="footer-text">{description}</p>
            </div>

            <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">My Cart</Link></li>
            </ul>
            </div>

            <div className="footer-section">
            <h4 className="footer-subheading">Contact Us</h4>
            <p className="footer-text">Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
            <p className="footer-text">Phone: {contactPhone}</p>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {copyright || storeName}. All rights reserved.</p>
        </div>
        </footer>
    );
}

export default Footer;