import React from 'react'
import AppCounter from './CounterApp/AppCounter'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <div className='m-10'>
      <Toaster position='bottom-center'/>
      <AppCounter/>
    </div>
  )
}

export default App