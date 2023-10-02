
import Joi from 'joi';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logFlage, { F_flag,logToggle } from '../Store/Slice/logFlage';
import { useDispatch, useSelector } from 'react-redux';
export default function Login() {

   const dispatch = useDispatch();
  const log_f = useSelector(state => state.logFlage.log_flag);

  const [erroList, seterroList] = useState([]);

  const [user, setUser] = useState({email: '',password:''});



  const navig = useNavigate();
  function validateLoginForm() {
   let scheme= Joi.object({ 
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string(),
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

    let validate = validateLoginForm();
    
    if (validate.error) {

      seterroList(validate.error.details);
       dispatch(F_flag());

    } else {
      navig('/home'); 
      dispatch(logToggle());
    }}
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
      <label className='' htmlFor='email'>Email :</label>
    <input onChange={getUserdata} type='email'  className='form-control my_input my-2 ' name='email' id='email'></input>
   
      <label className='' htmlFor='password'>Password :</label>
      <input onChange={getUserdata} type='password' className='form-control my_input my-2 ' name='password' id='password'></input>
     
      <button className=' btn btn-info py-2' >Login</button>
    </form>
  
  </>
}
