import React, { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [alltask, setAllTask] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setAllTask([...alltask, { id: Date.now(), text: task }]);
    setTask('')
  };

  // delete task function

  const deleteTask = (id) => {
    setAllTask(alltask.filter((task)=> task.id !== id))
  }



  return (
    <div className="px-4 py-24 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Todo List App</h1>
      {/* input field & button */}
      <div className="flex gap-2">
        <input
          type="text"
          onChange={(event) => setTask(event.target.value)}
          name="text"
          id="text"
          placeholder="Add to task..."
          value={task}
          className="border p-2 text-gray-500 rounded-md flex-grow"
        />
        <button
          onClick={addTask}
          className="bg-indigo-300 border  rounded-sm border-indigo-900 px-4 font-semibold"
        >
          Add Task
        </button>
      </div>
      {/* show task */}
      <div>
        {alltask.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {alltask.map((task) => (
              <li key={task.id} className="bg-gray-300 flex justify-between items-center p-2 rounded shadow-sm">
                <span>{task.text}</span>
                <button onClick={()=>deleteTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">
                  Delete
                </button>
              </li>
            ))}{" "}
          </ul>
        ) : (
          <p className="text-gray-600 mt-4">No task yet. Add some!</p>
        )}
      </div>
    </div>
  );
}

export default ToDo;
