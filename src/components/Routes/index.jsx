import { Route, Routes } from 'react-router-dom'

import React, { Suspense } from 'react'



const Register = React.lazy(() => import('./../Register/Register'));
const Login = React.lazy(() => import('./../Login/Login'));
const Home = React.lazy(() => import('./../Home/Home'));
const Notfound = React.lazy(() => import('./../Notfound/NotFound'));
const People = React.lazy(() => import('./../People/People'));
const Movies = React.lazy(() => import('./../Movies/Movies'));  
export default function Router() {

  return (
    <Suspense  se fallback={ <i className='fas fa-spinner fa-spin fa-2x  center center'></i>}>
<Routes>
 
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/wishlist' element={<Movies/>}/>
        <Route path='/search' element={<People/>}/>
        <Route path="*" element={<Notfound />} />
        </Routes>
        </Suspense>
  )
}
  {
      /*<BrowserRouter>
      <Navbar/>
      <div className="container">
      <Router />
      </div>
    <Footer/>        
    </BrowserRouter> */
    }
    