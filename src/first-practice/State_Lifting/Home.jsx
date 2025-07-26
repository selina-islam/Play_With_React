import React, { useState } from "react"; // importing react and useState hook
import Todos from "./Todos"; // importing the Todos component
import NewTodo from "./NewTodo"; // importing the NewTodo component

// a dummy list of initial todos to display when the app loads
const dummytodos = ["todo1", "todo2", "todo3"];

const Home = () => {
  // creating a state variable 'todos' with default value from dummytodos
  const [todos, setTodos] = useState(dummytodos);

  // function to handle adding a new todo item from the NewTodo component
  const handleNewTodo = (newtodo) => {
    // updating the todos state by adding the new todo to the existing list
    setTodos([...todos, newtodo]);
  };

  return (
    <div>
      {/* rendering NewTodo component and passing the handleNewTodo function as a prop */}
      <NewTodo handleNewTodo={handleNewTodo} />

      {/* rendering Todos component and passing the todos array as a prop */}
      <Todos todos={todos} />
    </div>
  );
};

export default Home; // exporting the Home component so it can be used in other parts of the app
