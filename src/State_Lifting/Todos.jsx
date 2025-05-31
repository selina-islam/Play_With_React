import React from "react"; // importing react
import Todo from "./Todo"; // importing the single Todo component

const Todos = (props) => {
  return (
    <div>
      {/* mapping through the todos array passed as a prop and rendering a Todo component for each item */}
      {props.todos.map((todo, index) => (
        // passing each todo item as a prop to the Todo component
        // using index as the key (not ideal for large lists, but okay for small static lists)
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Todos; // exporting the Todos component to be used in the Home component or elsewhere
