import React from "react";

const Todo = (props) => {
  // handles delete button click
  const handleDelete = () => {
    props.handleDelete(props.data.id);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white w-[90%] lg:w-[70%] md:w-[60%] mx-auto rounded m-2">
      <div>
        <p className="font-semibold text-xl">{props.data.title}</p>{" "}
        {/* todo title */}
        <p>{props.data.desc}</p> {/* todo description */}
      </div>
      <div>
        <button onClick={handleDelete} className="cursor-pointer">
          delete
        </button>{" "}
        {/* delete button */}
      </div>
    </div>
  );
};

export default Todo;
