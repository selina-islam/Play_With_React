import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
          <div>
                  {props.data.map((data) => (
                          <Todo key={data.id} data={data} handleDelete={props.handleDelete} />
                  ))}
    </div>
  )
}

export default Todos