import { useState } from "react";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <>
      <h1>Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
