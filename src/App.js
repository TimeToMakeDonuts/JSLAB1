import React from 'react';
import './App.css';
import HandleClick from './components/HandleClick';
import HandleMouseOver from './components/HandleMouseOver';
import ShowImage from './components/ShowImage';
import LoadDataFromJson from './components/LoadDataFromJson';
import UploadFile from './components/UploadFile';
import ChangeStyle from './components/ChangeStyle';
import Counter from './components/Counter';
import CounterIncorrect from './components/CounterIncorrect';

function App() {
    return (
        <div className="app">
            <h1>React Components Project</h1>
            <div className="grid">
                <div className="card">
                    <h2>Counter (Prawidłowy)</h2>
                    <Counter />
                </div>
                <div className="card">
                    <h2>Counter (Nieprawidłowy)</h2>
                    <CounterIncorrect />
                </div>
                <div className="card">
                    <h2>Handle Click</h2>
                    <HandleClick />
                </div>
                <div className="card">
                    <h2>Handle Mouse Over</h2>
                    <HandleMouseOver />
                </div>
                <div className="card">
                    <h2>Show Image</h2>
                    <ShowImage />
                </div>
                <div className="card">
                    <h2>Load Data from JSON</h2>
                    <LoadDataFromJson />
                </div>
                <div className="card">
                    <h2>Upload File</h2>
                    <UploadFile />
                </div>
                <div className="card">
                    <h2>Change Style</h2>
                    <ChangeStyle />
                </div>
            </div>
        </div>
    );
}

export default App;
