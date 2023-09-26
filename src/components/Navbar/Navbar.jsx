import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <nav className=' p-2 flex-column flex-md-row d-flex justify-content-between'>
    <div className='leftnav  flex-column flex-md-row d-flex align-items-center'>
      <h1 className='m-0 pe-3'> Noxe</h1>
      <ul className=' list-unstyled flex-column flex-md-row d-flex m-0 align-items-center'>
      <li className=' px-2'> <Link to='home'> Home</Link> </li>
      <li className=' px-2'> <Link to='movies'>Movies</Link> </li>
      <li className=' px-2'> <Link to='tv'>Tv</Link> </li>
      <li className=' px-2'> <Link to='people'></Link>People</li>
      <li className=' px-2'> <Link to='about'></Link>About </li>
      </ul> 
    </div>
    <div className='right-nav  flex-column flex-md-row d-flex align-items-center'>
      <div className='social-media'>
        <i className='fab fa-facebook mx-1'></i>
        <i className='fab fa-instagram mx-1'></i>
        <i className='fab fa-twitter mx-1'></i>
        <i className='fab fa-spotify mx-1'></i>
        <i className='fab fa-youtube mx-1'></i>
      </div>
      <ul className=' list-unstyled flex-column flex-md-row d-flex m-0 align-items-center'>
      <li className=' px-2'> <Link to='login'> Login</Link> </li>
      <li className=' px-2'> <Link to='/'>Register</Link> </li>
      <li className=' px-2'> <span>Logout</span> </li>
      </ul> 
    </div>
    
  
  
  
  
  
  
  
  
  
  </nav>
}
