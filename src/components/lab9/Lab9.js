import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Interests from "./Interests";
import Favorite from "./Favorite";
import Contact from "./Contact";

const Lab9 = () => {
  return (
    <div className="lab-container">
      <h1>Lab 9 - Zakładki</h1>
      <nav className="lab9-nav">
        <ul>
          <li><Link to="/lab9/about">O mnie</Link></li>
          <li><Link to="/lab9/interests">Zainteresowania</Link></li>
          <li><Link to="/lab9/favorite">Ulubiona gra</Link></li>
          <li><Link to="/lab9/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="interests" element={<Interests />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Lab9;
