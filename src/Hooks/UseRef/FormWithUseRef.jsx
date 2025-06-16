import React, { useRef, useState } from 'react'

const FormWithUseRef = () => {
    const nameRef= useRef('')
    const emailRef=useRef('')
    const passRef= useRef('')
    const [error,setError]= useState('')

    const handleForm=(e)=>{
        e.preventDefault()
        if(passRef.current.value.length < 8){
            setError('Password must be 8 character')
        }else{
            setError('')
            
             console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
        }
          nameRef.current.value = ''
            emailRef.current.value = ''
            passRef.current.value = ''
       
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <input ref={nameRef}  defaultValue='Selina Islam' type="text" name='text' required className='border'/> <br />
            <input ref={emailRef} type="email" name='email' required className='border'/> <br />
            <input ref={passRef} type="password" name='password' required className='border'/> <br />
                <small>{error}</small> <br />
            <input type="submit" value='Submit'/>
        </form>
    </div>
  )
}

export default FormWithUseRef