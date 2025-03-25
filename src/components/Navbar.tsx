import { Link } from 'react-router-dom';
import { DarkModeToggle } from './DarkModeToggle';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">E-Commerce Store</Link>
            </div>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">
                    Cart <span className="cart-count">(0)</span>
                </Link>
                <Link to="/orders">Orders</Link>
                <Link to="/admin">Admin</Link>
            </div>

            <div className="navbar-actions">
                <DarkModeToggle />
                <button className="login-button">Login</button>
            </div>
        </nav>
    );
};