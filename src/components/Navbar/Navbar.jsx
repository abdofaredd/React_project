import React from 'react'
import { Link } from 'react-router-dom'
import logFlage, { F_flag, logToggle } from '../Store/Slice/logFlage';
import { useDispatch, useSelector } from 'react-redux';
export default function Navbar() {
   const dispatch = useDispatch();

  const log_f = useSelector(state => state.logFlage.log_flag);
  
  // const log_o = useSelector(state => state.logFlage.logToggle);
  return <nav className=' p-2 flex-column flex-md-row d-flex justify-content-between'>
    <div className='leftnav  flex-column flex-md-row d-flex align-items-center'>
      <h1 className='m-0 pe-3'> Noxe</h1>
     
     {log_f ? <ul className=' list-unstyled flex-column flex-md-row d-flex m-0 align-items-center'>
      <li className=' px-2'> <Link to='home'> Home</Link> </li>
      <li className=' px-2'> <Link to='wishlist'>Wish List</Link> </li>
      <li className=' px-2'> <Link to='search'>Search</Link></li>
      {/*  <li className=' px-2'> <Link to='about'>About</Link> </li>*/}
      </ul> :''} 
    </div>
    <div className='right-nav  flex-column flex-md-row d-flex align-items-center'>
      <div className='social-media'>
        <i className='fab fa-facebook mx-1'></i>
        <i className='fab fa-instagram mx-1'></i>
        <i className='fab fa-twitter mx-1'></i>
       <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <ul className=' list-unstyled flex-column flex-md-row d-flex m-0 align-items-center'>
    
        {
          log_f ? <> 
            <li className=' px-2'  > <Link to='login'>  <span >Logout</span></Link> </li> </> : <>
              <li className=' px-2'> <Link to='login'> Login</Link> </li>
              <li className=' px-2'>  <Link to='/'>
                Register </Link> </li>
              </>
        } 
      </ul> 
    </div>
    
  
  
  
  
  
  
  
  
  
  </nav>
}
