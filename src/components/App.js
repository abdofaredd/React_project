import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Tv from './Tv/Tv';
import People from './People/People';
import Register from './Register/Register';
import Login from './Login/Login';
import Notfound from './Notfound/NotFound';
import React, { Suspense } from 'react'
// const Movies1 = React.lazy(() => import('./Movies/Movies'));
const Home1 = React.lazy(() => import('./Home/Home'));
function App() {

  let routes = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: 'home', element: <Home1  /> },
      { path: 'wishlist',element:<Movies/ > },
      { path: 'details' ,  element:<Tv/> },
      { index: true , element:<Register/> },
      { path: 'search' , element:<People/> },
      { path: 'login' , element:<Login  /> },
      { path: '*' , element:<Notfound  /> },
    ]
  }
  ])
  
  return <Suspense fallback={<i className='fas fa-spinner fa-spin fa-2x'></i>}>
    <RouterProvider  router={routes}/>
  </Suspense>
}

export default App;
