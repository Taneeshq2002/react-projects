import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="w-full bg-red-500 text-3xl p-4">Hello</h1>
    </>
  );
}

export default App;
