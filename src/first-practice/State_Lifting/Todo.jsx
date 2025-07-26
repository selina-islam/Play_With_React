import React from 'react' // importing react

const Todo = (props) => {
  return (
    <div>
      {/* displaying the todo text received as a prop from the parent component */}
      <p>{props.todo}</p>
    </div>
  )
}

export default Todo // exporting the Todo component so it can be used inside other components like Todos
