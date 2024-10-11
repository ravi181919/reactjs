import React from "react";
import { login, logout } from "./store/authSlice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen w-full flex flex-wrap content-between bg-zinc-800 text-white">
      <div className="w-full block">
        <Header />
        <main className="flex flex-col items-center w-full py-8 text-zinc-300 bg-zinc-800">
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : <div className="w-full h-screen flex items-center justify-center bg-zinc-900 text-white">
    <h1 className="text-3xl font-semibold leading-none select-none">Loading...</h1>
  </div>;
};

export default App;
