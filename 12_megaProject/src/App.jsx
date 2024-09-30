import React from "react";
import { login, logout } from "./store/authSlice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { Footer, Header } from "./components";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        useDispatch(login(userData));
      }else{
        useDispatch(logout())
      }
    })
    .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen w-full flex flex-wrap content-between bg-zinc-800 text-white">
      <div className="w-full block">
        <Header />
        <main></main>
        <Footer />
      </div>
    </div>
  ) : (null)
};

export default App;
