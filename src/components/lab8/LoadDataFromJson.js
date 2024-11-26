import React, { useState } from 'react';

const LoadDataFromJson = () => {
    const [data, setData] = useState(null);

    const loadData = () => {
        const exampleData = { name: 'Jan', age: 30 };
        setData(exampleData);
    };

    return (
        <div>
            <button onClick={loadData}>Załaduj dane</button>
            {data && <p>Imię: {data.name}, Wiek: {data.age}</p>}
        </div>
    );
};

export default LoadDataFromJson;
