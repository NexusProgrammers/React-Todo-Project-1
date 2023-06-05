import { useState } from "react";
import TodoItem from "./TodoItem";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmitTodo = (event) => {
    event.preventDefault();
    if (newTodo === "") {
      return toast.error("Please enter something");
    } else if (newTodo.trim() !== "") {
      setTodo([...todo, newTodo]);
      setNewTodo("");
      toast.success("Todo Added");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
    toast.success("Todo Deleted");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="">
          <form
            className="bg-white shadow-md p-6 hover:shadow-xl rounded-lg flex items-center justify-center gap-6"
            onSubmit={handleSubmitTodo}
          >
            <div className="">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="todo"
                type="text"
                placeholder="Add a todo"
                value={newTodo}
                onChange={handleTodoChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="px-8 pt-6 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {todo.map((item, index) => (
              <TodoItem
                item={item}
                key={index}
                onDelete={() => handleDeleteTodo(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Todo;
