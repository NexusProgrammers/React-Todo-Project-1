import { RiDeleteBin6Line } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ item, onDelete }) => {
  return (
    <>
      <div className="flex">
        <div className="bg-gray-200 px-4 gap-4 py-2 rounded-lg shadow-md flex justify-between items-center">
          <p className="text-gray-800">{item}</p>
          <button
            title="delete"
            className="text-red-600 hover:text-red-800"
            onClick={onDelete}
          >
            <RiDeleteBin6Line size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
