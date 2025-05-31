import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const SignUp = () => {
        const formik = useFormik({
                initialValues: {
                        name: '',
                        email: '',
                        password: ''
                },
                validationSchema: Yup.object({
                        name:Yup.string().min(2, 'name must be at least 2 characters long').required('Name is required'),
                        email:Yup.string().email().required(),
                        password:Yup.string().min(6, 'password must be at least 6 characters long').required()
                }),
                onSubmit: (values, { resetForm }) => {
                        console.log(values);
                        alert('form submitted successfully')
                        resetForm()
                }
        })
        const nameerror = formik.touched.name && formik.errors.name ? <p className='text-red-500 text-sm italic'>{formik.errors.name}</p> : null;
        const emailerror = formik.touched.email && formik.errors.email ? <p className='text-red-500 text-sm italic'>{formik.errors.email}</p> : null;
        const passworderror = formik.touched.password && formik.errors.password ? <p className='text-red-500 text-sm italic'>{ formik.errors.password}</p> : null
  return (
          <div className='m-8'>
                  <h2 className='text-center py-4'>Use SignUp</h2>
                  <form onSubmit={formik.handleSubmit}  className=' text-center'>
                          <div>
                                  <label htmlFor="name">Name:</label>
                                  <input onChange={formik.handleChange} type="text" id='name' value={formik.values.name} name='name' required className='border' />
                                  { nameerror}
                          </div>
                          <div>
                                  <label htmlFor="email">Email:</label>
                                  <input onChange={formik.handleChange} type="email" value={formik.values.email} id='email' name='email' required className='border' />
                                  { emailerror}
                          </div>
                          <div>
                                  <label htmlFor="password">Password:</label>
                                  <input onChange={formik.handleChange} type="password" id='password' required name='password' value={formik.values.password} className='border' />
                                  {passworderror}
                          </div>
                          <button type='submit' className='border my-2 cursor-pointer'>Submit</button>
                  </form>
    </div>
  )
}

export default SignUp