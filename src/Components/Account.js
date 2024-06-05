import React, { useState } from 'react';
import './Account.css';

export const Account = () => {
    const [accountDetails, setAccountDetails] = useState({
        name: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountDetails({
            ...accountDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {

        // Removing the default behaviour of the browser when the form is submitted
        e.preventDefault();
        alert('Account details saved!');
    };

    return (
        <div className='account-container'>
            <h2>Account Details</h2>
            <form onSubmit={handleSubmit} className='account-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={accountDetails.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Address:</label>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        value={accountDetails.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit' className='save-button'>Save</button>
            </form>
        </div>
    );
};

export default Account;
