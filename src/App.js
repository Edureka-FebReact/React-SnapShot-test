import React from "react";
import "./App.css";
import Items from "./components/Items";

function App() {
  const items = ["cars", "Bikes", "Boats"];
  return (
    <div>
      <h1>welcome to edureka</h1>
      <Items items={items} />
    </div>
  );
}

export default App;
