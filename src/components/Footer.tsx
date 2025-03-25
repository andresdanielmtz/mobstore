import { Link } from 'react-router-dom';

export const Footer = () => (
    <footer className="footer">
        <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/orders">Order History</Link></li>
            </ul>
        </div>

        <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: support@store.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>

        <div className="footer-section">
            <h3>About</h3>
            <p>© 2023 Our E-Commerce Store</p>
        </div>
    </footer>
);