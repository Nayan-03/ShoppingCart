import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductData from './ProductData';
import './NavbarStyles.css';

const Product = ({ cartItems, setCartItems }) => {
    const navigate = useNavigate();

    const handleAddToCart = (product) => {

        // checking for existing products
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }

        // Navigate to the cart page
        navigate('/cart');
    };

    return (
        <div className='container'>
            {ProductData.map((curElm) => (
                <div key={curElm.id} className='box'>
                    <div className='contant'>
                        <div className='img-box'>
                            <img src={curElm.image} alt={curElm.Title} />
                        </div>
                        <div className='detail'>
                            <div className='info'>
                                <h3>{curElm.Title}</h3>
                                <p>$ {curElm.price}</p>
                            </div>
                            <button onClick={() => handleAddToCart(curElm)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
