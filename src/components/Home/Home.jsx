import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import logFlage from '../Store/Slice/logFlage';
import { Link } from 'react-router-dom';
export default function Home() {

  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getMovies(p) {
      
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dfee8f79eb74cfe829f62960da0d964e`);
    setMovies(data.results);
    console.log(data.results);

  }
  useEffect(() => {
     const delay = 1000;
    setIsLoading(true);
setTimeout(() => {
      setIsLoading(false);
    getMovies();
    }, delay);

  }, []);

  const log_f = useSelector(state => state.logFlage.log_flag);
  return (
    
         
         <div div className = "row text-center  position-relative  " >
           
  {
      movies.length > 0 ? movies.map((movie, index) =>
      <div key={index} className="col-lg-3 col-md-3 mb-5 position-relative ">
                   
        <Link pro={movie} className=' text-decoration-none' to={`/itemDetails`} >
                  
          <div className="card h-100  position-relative" style={{ backgroundColor: "lightgrey" }}>
            <img className="  " src={`https://image.tmdb.org/t/p/w500//${movie.backdrop_path}`} alt="Card image cap" />
              
            <div className="card-body d-flex    align-content-between align-items-stretch flex-column">
              <h5 className="card-title my-2  fw-bold ">{movie.title}</h5>
                <div className='vote p-2 w-25 text-dark bg-warning top-0 end-0 position-absolute'>{movie.vote_average }</div>
            </div>

          </div>
        </Link>
                    
      </div>): <i className='fas fa-spinner fa-spin fa-2x  justify-content-center'></i>
      }
      </div>
            
            
            
  
    
  )
}


 {/*} < div className = ' fixed-bottom mt-5 py-2  position-absolute  bottom-0' >
        <button type="button" className="btn btn-secondary px-3 m-3">page 1</button>
<button type="button" className="btn btn-success px-3 m-3" >page 4</button>
<button type="button" className="btn btn-danger px-3 m-3" >page 3</button></div >
</div >

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show spinner
    setIsLoading(true);

    // Delay the API request for 2 seconds (adjust as needed)
    const delay = 2000;

    // Replace with your API request logic
    setTimeout(() => {
      // Simulate API request completion
      // Hide the spinner
      setIsLoading(false);
      // Perform your API request here
    }, delay);




*/}