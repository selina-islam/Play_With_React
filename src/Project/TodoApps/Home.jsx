import React, { useState } from 'react'
import Todos from './Todos'
import Newtodo from './Newtodo'
import { v4 as uuidv4 } from 'uuid';


const Home = (props) => {
        const [data, setData] = useState([])
        const handleNewData = (newData) => {
                setData((prev) => [...prev, { id: uuidv4(), ...newData }])
        }
        const handleDelete = (id) => {
                setData((prev)=> prev.filter((data)=> data.id !== id))
        }
  return (
          <div>
                  <h1 className='text-2xl font-bold text-center py-5 text-blue-700'>Todo App</h1>
                  <Newtodo handleNewData={ handleNewData} />
                  <Todos data={data} handleDelete={handleDelete}  />
    </div>
  )
}

export default Home