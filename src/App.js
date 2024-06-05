import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { Account } from './Components/Account';

function App() {
    // cary and set carts item 
    const [cartItems, setCartItems] = useState([]);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/product" element={<Product cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </Router>
    );
}

export default App;
