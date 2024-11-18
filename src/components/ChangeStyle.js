import React, { useState } from 'react';

const ChangeStyle = () => {
    const [style, setStyle] = useState({ color: 'black', fontWeight: 'normal' });

    const changeStyle = () => {
        setStyle({ ...style, color: 'red', fontWeight: 'bold' });
    };

    return (
        <div>
            <p style={style}>Styl tego tekstu zostanie zmieniony.</p>
            <button onClick={changeStyle}>Zmień styl</button>
        </div>
    );
};

export default ChangeStyle;
