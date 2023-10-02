import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link,useParams } from "react-router-dom";
import usePagination from "../usePagination";
import { addToWishlist, removeFromWishlist } from "../Store/Slice/movieSlice";
export default function Home() {

  let a = useParams();


  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch(); // Initialize dispatch
  const { currentPage, nextPage, previousPage } = usePagination(1);
  const wishlist = useSelector((state) => state.wishlistSlice.wishlist); // Get wishlist from Redux state

  async function getMovies(page) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dfee8f79eb74cfe829f62960da0d964e&page=${page}`
    );
    setMovies(data.results);
  }

  useEffect(() => {
    const delay = 1000;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      getMovies(currentPage);
    }, delay);
  }, [currentPage]);

  const log_f = useSelector((state) => state.logFlage.log_flag);

  // Function to handle adding/removing movies from wishlist
  const handleWishlistToggle = (movie) => {
    if (wishlist.some((m) => m === movie)) {
      // If movie is in wishlist, remove it
      dispatch(removeFromWishlist(movie));
    } else {
      // If movie is not in wishlist, add it
      dispatch(addToWishlist(movie));
    }
  };

  return (
    <div className="row text-center position-relative">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <div key={index} className="col-lg-3 col-md-3 mb-5 position-relative">
            <Link
              pro={movie}
              className="text-decoration-none"
              to={`/itemDetails/${movie.id}`}
            >
              <div
                className="card h-100"
                style={{ backgroundColor: "lightgrey" }}
              >
                <img
                  className=""
                  src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
                  alt="Card image cap"
                />

                <div className="card-body d-flex align-content-between align-items-stretch flex-column">
                  <h5 className="card-title fw-bold">{movie.title}</h5>
                  {/* <div className="wishlist" onClick={(event)=>event.preventDefault()}>
                  <i class="fa-regular fa-heart"></i>
                    
                  </div> */}

                  <div
                    className={`wishlist ${
                      wishlist.some((m) => m === movie.id) ? "filled" : ""
                    }`}
                    onClick={(event) => {
                      handleWishlistToggle(movie.id);
                      event.preventDefault();
                    }}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="w-25 text-white bg-info top-0 end-0 position-absolute">
                    {movie.vote_average}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <i className="fas fa-spinner fa-spin fa-2x justify-content-center"></i>
      )}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

{
  /*} < div className = ' fixed-bottom mt-5 py-2  position-absolute  bottom-0' >
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




*/
}
