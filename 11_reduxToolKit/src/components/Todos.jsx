import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/TodoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [todoText, setTodoText] = React.useState({});
  const [isTodoEditable, setIsTodoEditable] = React.useState(null);
  const dispatch = useDispatch();

  const handleInputChange = (id, text) => {
    setTodoText((prev) => ({...prev, [id]: text,}));
  };

  const editTodo = (id) => {
    if (todoText[id] !== undefined) {
      dispatch(updateTodo({ id, text: todoText[id] }));
    }
    setIsTodoEditable(null);
  };

  return (
    <>
      <div className="mt-5 w-1/2 max-h-80 overflow-y-auto overflow-hidden flex flex-col items-center  justify-center">
        <h1 className="font-semibold text-2xl text-zinc-300">Todos</h1>
        <ul className="list-none bg-white/10 backdrop-blur-lg rounded-md w-full mt-4 flex flex-col gap-2 ">
          {todos.map((todo) => (
            <li
              className="flex gap-5  items-center hover:bg-zinc-500 text-white px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white w-full">
                <input
                  type="text"
                  className={`border outline-none py-2 w-full bg-transparent rounded-lg ${
                    isTodoEditable === todo.id
                      ? "border-black/10 px-2"
                      : "border-transparent"
                  }`}
                  onChange={(e) => handleInputChange(todo.id, e.target.value)}
                  value={
                    todoText[todo.id] !== undefined
                      ? todoText[todo.id]
                      : todo.text
                  }
                  readOnly={isTodoEditable !== todo.id}
                />
              </div>

              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                  if (isTodoEditable === todo.id) {
                    editTodo(todo.id);
                  } else {
                    setIsTodoEditable(todo.id);
                  }
                }}
              >
                {isTodoEditable === todo.id ? "📁" : "✏️"}
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white  border-0 py-1 px-4 focus:outline-none bg-white/20 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
