import React from 'react';
import './Cart.css';


const Cart = ({ cartItems, setCartItems }) => {

    // when user click the finalize purchases button
    const showAlertMessage = () => {
        alert("Your order is purchased..... ")
    }

    // removing item form the cart
    const handleRemoveFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    // changing the quantity form the cart 
    const handleQuantityChange = (productId, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item
        ));
    };

    // using reduce method to ge the total price
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.Title}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                    </td>
                                    <td>${item.price * item.quantity}</td>
                                    <td>
                                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <h3>Total: ${total.toFixed(2)}</h3>
                        <button onClick={showAlertMessage} className="finalize-purchase-button">Finalize Purchase</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
