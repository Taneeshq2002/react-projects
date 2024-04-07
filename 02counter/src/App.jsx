import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 5;
  const addValue = () => {
    setCounter(counter + 1);
  };

  const subValue = () => {
    if (counter == 0) {
      setCounter(0);
    } else setCounter(counter - 1);
  };

  const addFour = () => {
    setCounter((prevVal) => prevVal + 1);
    setCounter((prevVal) => prevVal + 1);
    setCounter((prevVal) => prevVal + 1);
    setCounter((prevVal) => prevVal + 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subValue}>Subtract value</button>
      <button onClick={addFour}>Add four</button>
    </>
  );
}

export default App;
