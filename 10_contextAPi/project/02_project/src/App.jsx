import React, { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todos) => {
    setTodos((prev) => [...prev, { id: Date.now(), todos }]);
  };

  const updateTodo = (id, todos) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todos : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todoList) =>
        todoList.id === id
          ? { ...todoList, complete: !todoList.complete }
          : todoList
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    localStorageTodos &&
      localStorageTodos.length > 0 &&
      setTodos(localStorageTodos);

    {
      /** secont type 
      if (localStorageTodos && localStorageTodos.length > 0) {
         setTodos(localStorageTodos);
      } 
      */
    } 
  }, []);
  return (
    <TodoContextProvider
      value={{ todos, deleteTodo, updateTodo, toggleComplete, addTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm /></div>
          <div className="flex flex-wrap gap-y-3">
           {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
           ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default App;
