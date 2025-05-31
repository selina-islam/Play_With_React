import React, { useState } from 'react'
import { PiEggCrackLight } from 'react-icons/pi'

const Newtodo = (props) => {
        const [data, setData] = useState({ title: '', desc: '' })
        const handleInput = (e) => {
                const { name, value } = e.target;
                setData((prev)=>({...prev, [name]: value}))
        }
        const handleChange = (e) => {
                e.preventDefault();
                props.handleNewData(data)
                setData({title:'', desc:''})
        }
  return (
          <div className=" p-4 bg-blue-500 text-white w-[90%] lg:w-70%] md:w-[60%] mx-auto rounded m-2">
                  <form onSubmit={handleChange}>
                          <div>
                                  <label htmlFor="title">Title: </label> <br />
                                  <input onChange={handleInput} type="text" name='title' value={data.title} id='title' className='w-full focus:outline-none border border-gray-600 rounded focus:ring-1'/>
                          </div>
                          <div>
                                  <label htmlFor="desc">Description: </label> <br />
                                  <textarea onChange={handleInput} type="text" name='desc' rows='3' value={data.desc} id='desc' className='focus:outline-none border border-gray-600 rounded focus:ring-1 w-full'/>
                          </div>
                          <button className='border text-center w-full rounded cursor-pointer'>Add Todo</button>
                  </form>
    </div>
  )
}

export default Newtodo