import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-5">Tailwind test</h1>
      <Card username="Taneeshq" btnText="Click me"></Card>
      <Card username="John" btnText="Visit me"></Card>
    </>
  );
}

export default App;
