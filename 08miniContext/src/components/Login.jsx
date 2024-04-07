import react, { useContext, useState } from "react";
import userContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const { setUser } = useContext(userContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, pass });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}

export default Login;
