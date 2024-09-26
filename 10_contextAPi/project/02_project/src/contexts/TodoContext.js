import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Hello Todo",
      complete: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider
