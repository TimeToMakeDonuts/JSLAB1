import React, { useState } from 'react';

const HandleMouseOver = () => {
    const [color, setColor] = useState('blue');

    const handleMouseOver = () => setColor('green');

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    width: '200px',
                    height: '100px',
                    backgroundColor: color,
                    textAlign: 'center',
                    lineHeight: '100px', // Wycentrowanie tekstu wewnątrz diva
                    borderRadius: '10px', // Dla uroku!
                }}
                onMouseOver={handleMouseOver}
            >
                Najedź na mnie!
            </div>
        </div>
    );
};

export default HandleMouseOver;