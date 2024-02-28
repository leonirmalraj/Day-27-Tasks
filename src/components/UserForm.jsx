import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) return; // Prevent adding empty users
        const newUser = { name, email };
        onSubmit(newUser);
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
