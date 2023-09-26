import React from 'react'

export default function Register() {
  return <>
    <form>
    <label className='' htmlFor='first_name'>First Name :</label>
    <input type='text'  className='form-control my_input my-2 ' name='First_Name' id='first_name'></input>
    <label className='' htmlFor='last_name'>Last Name :</label>
    <input type='text'  className='form-control my_input my-2 ' name='last_name' id='last_name'></input>
    <label className='' htmlFor='age'>Age :</label>
    <input type='number'  className='form-control my_input my-2 ' name='age' id='age'></input>
    <label className='' htmlFor='email'>Email :</label>
    <input type='email'  className='form-control my_input my-2 ' name='email' id='email'></input>
    <label className='' htmlFor='password'>Password :</label>
      <input type='password' className='form-control my_input my-2 ' name='password' id='password'></input>
      <button className=' btn btn-info py-2'>Register</button>
    </form>
  
  </>
}
