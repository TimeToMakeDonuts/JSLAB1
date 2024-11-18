import React, { useState } from 'react';

const HandleMouseOver = () => {
    const [color, setColor] = useState('blue');

    const handleMouseOver = () => setColor('green');

    return (
        <div
            style={{ width: '200px', height: '100px', backgroundColor: color }}
            onMouseOver={handleMouseOver}
        >
            Najedź na mnie!
        </div>
    );
};

export default HandleMouseOver;
