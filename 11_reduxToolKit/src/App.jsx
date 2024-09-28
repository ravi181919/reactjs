import React from "react";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";


const App = () => {
  const todos = useSelector(state => state.todos)
  return (
    <div className="bg-zinc-600 h-screen w-full flex items-center justify-start flex-col ">
      <div className="w-full px-10 py-5">
        <h1 className="bg-white/20 backdrop-blur-lg p-5 text-zinc-200 text-center font-bold text-3xl">
          React - Redux - Toolkit
        </h1>
      </div>
      <AddTodos />

      <Todos />
    </div>
  );
};

export default App;
