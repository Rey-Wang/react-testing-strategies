import React from "react";
import { OrderDetail } from "./features/OrderDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OrderDetail orderId={"123"} />
      </header>
    </div>
  );
}

export default App;
