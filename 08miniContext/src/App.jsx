import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Context API</h1>
        <Login></Login>
        <Profile></Profile>
      </UserContextProvider>
    </>
  );
}

export default App;
