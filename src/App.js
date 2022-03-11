import React from "react";
import "./App.css";
import Items from "./components/Items";

function App() {
  const items = ["cars", "Bikes", "Boats"];
  return <Items items={items} />;
}

export default App;
