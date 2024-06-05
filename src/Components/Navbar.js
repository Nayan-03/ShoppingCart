import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
    return (
        <header>
            <h2 className="logo">Shopping</h2>
            <nav className="navigation">
                <Link className="a" to="/product">Product</Link>
                <Link className="a" to="/cart">Cart</Link>
                <Link className="a" to="/account">Account</Link>
                <button className="btn-popup" onClick={() => alert('Logout')}>Logout</button>
            </nav>
        </header>
    );
};

export default Navbar;
