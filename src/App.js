import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lab7 from "./components/lab7/Lab7";
import Lab8 from "./components/lab8/Lab8";
import Lab9 from "./components/lab9/Lab9";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Pasek zakładek dla laboratoriów */}
        <nav className="main-nav">
          <ul>
            <li><Link to="/lab7">Lab 7</Link></li>
            <li><Link to="/lab8">Lab 8</Link></li>
            <li><Link to="/lab9">Lab 9</Link></li>
          </ul>
        </nav>

        {/* Główne ścieżki */}
        <Routes>
          <Route path="/lab7/*" element={<Lab7 />} />
          <Route path="/lab8/*" element={<Lab8 />} />
          <Route path="/lab9/*" element={<Lab9 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
