import React, { useState } from "react";
import "./App.css"; // Ensure the correct path to your CSS file

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const colors = [
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white",
    // Add more colors here
  ];

  const bgChange = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    setBackgroundColor(colors[randomNumber]);
  };

  return (
    <div style={{ backgroundColor }} className="main">
      <h1>Background color changer</h1>
      <button onClick={bgChange}>Click me</button>
    </div>
  );
}

export default App;
