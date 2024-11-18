import React, { useState } from 'react';

const HandleClick = () => {
    const [message, setMessage] = useState('Kliknij przycisk.');

    const handleClick = () => setMessage('Przycisk został kliknięty!');

    return (
        <div className="component">
            <p>{message}</p>
            <button onClick={handleClick}>Kliknij</button>
        </div>
    );
};

export default HandleClick;
