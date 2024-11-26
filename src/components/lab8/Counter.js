import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return (
        <div className="component">
            <p>Wartość licznika: {count}</p>
            <button onClick={increment}>Zwiększ</button>
        </div>
    );
};

export default Counter;
