import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          console.log("Data");
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header>
          <main>
            <Outlet></Outlet>
          </main>
        </Header>
        <Footer />
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default App;
