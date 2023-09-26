import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Tv from './Tv/Tv';
import People from './People/People';
import Register from './Register/Register';
import Login from './Login/Login';





let routes = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: 'home',element:<Home/> },
      { path: 'movies',element:<Movies/ > },
      { path: 'tv' ,  element:<Tv/> },
      { path: 'register' , element:<Register/> },
      { path: 'people' , element:<People/> },
      { path: 'login' , element:<Login/> },
    ]
  }
])
function App() {
  return <RouterProvider router={routes}/>
}

export default App;
