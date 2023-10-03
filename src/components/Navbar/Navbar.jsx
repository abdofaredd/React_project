import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logFlage, { F_flag, logToggle } from '../Store/Slice/logFlage';
import { useDispatch, useSelector } from 'react-redux';
import LanguageContext from '../Context/language'
import ThemeContext from '../Context/ThemeContext'

export default function Navbar() {
   const dispatch = useDispatch();
   const count = useSelector((state) => state.wishlistSlice.wishlist);

  

  const log_f = useSelector(state => state.logFlage.log_flag);
  const { DarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  // const log_o = useSelector(state => state.logFlage.logToggle);
  return <nav className=' p-2 flex-column flex-md-row d-flex justify-content-between'>
    <div className='leftnav  flex-column flex-md-row d-flex align-items-center'>
      <h1 className='m-0 pe-3'> NOxe</h1>
     
     {log_f ? <ul className=' list-unstyled flex-column flex-md-row d-flex m-0 align-items-center'>
      <li className=' px-2'> <Link to='home'> Home</Link> </li>
      <li className=' px-3  position-relative'> <Link to='wishlist'> WishList </Link>    {count.length > 0 && (
              <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                {count.length}
              </span> )} </li>
      {/* <li className=' px-2'> <Link to='search'>Search</Link></li> */}
      {/*  <li className=' px-2'> <Link to='about'>About</Link> </li>*/}
      </ul> :''} 
    </div>
    <div className='right-nav  flex-column flex-md-row d-flex align-items-center'>
    <Link to='search'><i className="fa-solid fa-magnifying-glass"></i></Link>

      <div className='social-media'>
        <i className=' mx-1'><button onClick={toggleLanguage} className="border-0  btn navbar-brand">
              {language}
            </button></i>
        <i className=' mx-1'> <button
        className={`toggle-button ${DarkMode ? "dark" : "light"} btn border-0 `}
        onClick={toggleDarkMode}
      >
        <i className={`fas ${DarkMode ? "fa-moon": "fa-sun"}`}></i>
        <span className="ball"></span>
      </button></i>
  
{/* <div>
            <button onClick={toggleLanguage} className="border-0  btn navbar-brand">
              {language}
            </button>
          </div> */}


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
