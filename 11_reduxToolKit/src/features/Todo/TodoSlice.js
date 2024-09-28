import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};
export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }, 
    updateTodo: (state, action) => {
        const {id, text} = action.payload
        state.todos = state.todos.map((todo) => todo.id === id ? {...todo, text: text} : todo )
    }
  },
});
export const { addTodo, removeTodo, updateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
