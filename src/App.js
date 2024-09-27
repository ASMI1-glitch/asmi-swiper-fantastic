// src/App.jsx
import React from "react";
import Section from "./components/Section"; // Adjust path based on your folder structure
import "./styles/Card.module.css";
import "./styles/Section.module.css";
// Ensure this file exists for global styles

const App = () => {
  return (
    <div>
      <h1>Welcome to QTify</h1>
      <Section />
    </div>
  );
};

export default App;
