import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
        return (
                <div>
                        {/* loop through all todo data */}
                        {props.data.map((data) => (
                                <Todo
                                        key={data.id} // unique key for each todo
                                        data={data} // pass individual todo data
                                        handleDelete={props.handleDelete} // pass delete handler
                                />
                        ))}
                </div>
        )
}

export default Todos
