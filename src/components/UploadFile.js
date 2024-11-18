import React, { useState } from 'react';

const UploadFile = () => {
    const [fileName, setFileName] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : null);
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            {fileName && <p>Załadowano plik: {fileName}</p>}
        </div>
    );
};

export default UploadFile;
