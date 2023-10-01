import Joi from 'joi';
import React from 'react'
import { useState } from 'react'


import { useNavigate } from 'react-router-dom'
export default function Register() {
  let navig = useNavigate();
  const [erroList, seterroList] = useState([]);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password:''
  });


  function validateRegisterForm() {
   let scheme= Joi.object({
      first_name: Joi.string().pattern(/^[A-z]/).min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).required(),
      password: Joi.string().min(3).max(10).pattern(/^[A-z][a-z]{3,6}/),
    });
    return scheme.validate(user, { abortEarly: false });
}


  function getUserdata(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  } 


  function submitlog(e) {
    e.preventDefault();
    let validate=validateRegisterForm();
    if (validate.error) {
      
      seterroList(validate.error.details);

    } else {
    navig('/login');
      
    }
    

  }
  return <>
    {
      erroList.map((e,index) =>
      {
        if (e.context.label === 'password'  ) {
          return <div  key={index} className='alert   alert-danger my-2'>password invalid</div>
        } else
        {
         return  <div  key={index} className='alert   alert-danger my-2'>{e.message }</div>
        }       
        }
      )}
    <form onSubmit={submitlog}>
    <label className='' htmlFor='first_name'>First Name :</label>
    <input onChange={getUserdata} type='text'  className='form-control my_input my-2 ' name='first_name' id='first_name'></input>
    
      <label className='' htmlFor='last_name'>Last Name :</label>
    <input onChange={getUserdata} type='text'  className='form-control my_input my-2 ' name='last_name' id='last_name'></input>
   
      <label className='' htmlFor='age'>Age :</label>
    <input onChange={getUserdata} type='number'  className='form-control my_input my-2 ' name='age' id='age'></input>
   
      <label className='' htmlFor='email'>Email :</label>
    <input onChange={getUserdata} type='email'  className='form-control my_input my-2 ' name='email' id='email'></input>
   
      <label className='' htmlFor='password'>Password :</label>
      <input onChange={getUserdata} type='password' className='form-control my_input my-2 ' name='password' id='password'></input>
     
      <button className=' btn btn-info py-2'>Register</button>
    </form>
  
  </>
}
