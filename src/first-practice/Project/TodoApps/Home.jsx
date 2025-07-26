import React, { useState } from "react";
import Todos from "./Todos";
import Newtodo from "./Newtodo";
import { v4 as uuidv4 } from "uuid";

const Home = (props) => {
  const [data, setData] = useState([]); // holds all todo items

  const handleNewData = (newData) => {
    // adds a new todo with unique id
    setData((prev) => [...prev, { id: uuidv4(), ...newData }]);
  };

  const handleDelete = (id) => {
    // removes todo by id
    setData((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-5 text-blue-700">
        todo app
      </h1>
      <Newtodo handleNewData={handleNewData} /> {/* form for adding todo */}
      <Todos data={data} handleDelete={handleDelete} /> {/* shows all todos */}
    </div>
  );
};

export default Home;
