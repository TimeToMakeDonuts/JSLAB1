import React from "react";
import HandleClick from "./HandleClick";
import HandleMouseOver from "./HandleMouseOver";
import ShowImage from "./ShowImage";
import LoadDataFromJson from "./LoadDataFromJson";
import UploadFile from "./UploadFile";
import ChangeStyle from "./ChangeStyle";
import Counter from "./Counter";
import CounterIncorrect from "./CounterIncorrect";

const Lab8 = () => {
  return (
    <div className="lab-container">
      <h1>Lab 8 - React Components Project</h1>
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
};

export default Lab8;
