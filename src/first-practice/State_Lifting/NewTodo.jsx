import React, { useState } from "react"; // importing react and useState hook

const NewTodo = (props) => {
  // declaring a state variable 'todo' to store the current input value
  const [todo, setTodo] = useState("");

  // this function updates the 'todo' state whenever the input value changes
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // this function handles the form submission when the button is clicked
  const handleClick = (e) => {
    e.preventDefault(); // prevents the default form submission behavior (page reload)

    // checks if the input is empty or contains only spaces
    if (todo.trim() === "") {
      alert("please enter a valid todo"); // shows an alert if input is invalid
      return; // exits the function early
    }

    // calls the function passed from parent component to add the new todo
    props.handleNewTodo(todo);

    // clears the input field after adding the todo
    todo && setTodo("");
  };

  return (
    <div>
      {/* form element with an onSubmit handler */}
      <form action="" onSubmit={handleClick}>
        {/* input field to type new todo, bound to 'todo' state */}
        <input
          onChange={handleChange}
          type="text"
          name="todo"
          id="todo"
          value={todo}
          className="border"
        />

        {/* button to submit the new todo */}
        <button className="border cursor-pointer">add todo</button>
      </form>
    </div>
  );
};

export default NewTodo; // exporting the NewTodo component to use it in other files
