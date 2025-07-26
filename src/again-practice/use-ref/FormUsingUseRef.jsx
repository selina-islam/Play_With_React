import React, { useRef, useState } from 'react'

const FormUsingUseRef = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')


    const  handleFormsubmit = (e) => {
        e.preventDefault();
        if(passwordRef.current.value.length < 8){
            setError('Password must be at least 8 characters long')
            setTimeout(() => {
                setError('')
            }, 2000)
             return;
        }else{
            setError('')
            setMessage('Form submitted successfully!')
            setTimeout(() => {
                setMessage('')
            },2000)
             console.log(nameRef.current.value)
             console.log(emailRef.current.value)
             console.log(passwordRef.current.value)

              // Clear inputs
               nameRef.current.value = '';
               emailRef.current.value = '';
               passwordRef.current.value = '';
        }
      

    }
  return (
    <div className='max-w-xl mx-auto p-6 shadow-sm h-auto mt-12 '>
        <h1 className='mb-4 text-center text-2xl font-medium'>Form Using UseRef</h1>
        <form onSubmit={handleFormsubmit} className='flex flex-col gap-2.5'>

             {/* name input */}
            <input ref={nameRef} type="text" defaultValue={'Israt Jahan Shorna'} onFocus={(e)=> {
               if( e.target.value==='Israt Jahan Shorna'){
                e.target.value= ''
               }
            }} className='border text-xs p-2 rounded border-gray-400 focus:border-0 focus:outline-0  focus:ring-1 focus:ring-indigo-400 text-gray-600' />

            {/* email input */}
            <input ref={emailRef} onFocus={(e)=>{
                if(e.target.value === 'shorna@gmail.com'){
                    e.target.value=''
                }
            }} type="email" defaultValue={'shorna@gmail.com'}  className='border text-xs p-2 rounded border-gray-400 focus:border-0 focus:outline-0  focus:ring-1 focus:ring-indigo-400 text-gray-600' />

             {/* password input */}
            <input ref={passwordRef} onFocus={(e)=>{
                if(e.target.value ==='*********'){
                    e.target.value=''
                }
            }} type="password" defaultValue={'*********'}  className='border text-xs p-2 rounded border-gray-400 focus:border-0 focus:outline-0  focus:ring-1 focus:ring-indigo-400 text-gray-600'/>

            {/* success message */}
            {message && <small className={`text-center text-green-500 transition-opacity duration-500 ${message ? 'opacity-100' : 'opacity-0'}`}> {message}</small>}

            {/* error message */}
            {error && <small className='text-red-400 text-center'>{error}</small>}

            {/* submit button */}
            <button className='bg-gray-300 rounded-b-sm cursor-pointer'>Submit</button>
        </form>
    </div>
  )
}

export default FormUsingUseRef