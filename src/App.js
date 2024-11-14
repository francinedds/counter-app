import React, { useState } from "react";
import './App.css';

function App() {
const[count,setCount]=useState(0)

const increment = () => setCount(count + 1);
const reset = () => setCount(0);
const decrement = () => setCount(count - 1);

  return <div className="App">
    <h1>Simple Counting App</h1>
    <h2>{count}</h2>
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  </div>;
}

export default App;
