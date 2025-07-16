import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#222";
    document.body.style.color = theme === "light" ? "#000" : "#eee";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>Simple Dark Mode App</h1>
      <button onClick={toggleTheme} style={{ padding: "10px 20px", fontSize: 16, cursor: "pointer" }}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
