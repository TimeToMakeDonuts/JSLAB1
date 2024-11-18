import React, { useState } from 'react';
import image from '../images/kanade.jpg';

const ShowImage = () => {
    const [show, setShow] = useState(false);

    const toggleImage = () => setShow(!show);

    return (
        <div>
            <button onClick={toggleImage}>
                {show ? 'Ukryj obraz' : 'Pokaż obraz'}
            </button>
            {show && <img src={image} alt="Przykład" />}
        </div>
    );
};

export default ShowImage;
