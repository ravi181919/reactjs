import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoTitle: "Hello Todo",
      complete: false,
    },
  ],
  addTodo: (todoTitle) => {},
  updateTodo: (id, todoTitle) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider
