import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../Store/Slice/movieSlice';

export default function Movies() {
  const wish = useSelector((state) => state.wishlistSlice.wishlist);
  const dispatch = useDispatch()
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getMovieData(movieId) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=dfee8f79eb74cfe829f62960da0d964e`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching data for movie ${movieId}:`, error);
      return null;
    }
  }

  useEffect(() => {
    setIsLoading(true);

    async function fetchMovies() {
      const newMovies = [];
      for (const movieId of wish) {
        const movieData = await getMovieData(movieId);
        if (movieData) {
          newMovies.push(movieData);
        }
      }
      setMovies(newMovies);
      setIsLoading(false);
    }

    if (wish.length > 0) {
      fetchMovies();
    } else {
      setIsLoading(false);
    }
  }, [wish]);

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
                      wish.some((m) => m === movie.id) ? "filled" : ""
                    }`}
                    onClick={(event) => {
                      dispatch(removeFromWishlist(movie.id));
                      event.preventDefault();
                    }}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="w-25 py-2 vote text-white bg-warning top-0 end-0 position-absolute">
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
    </div>
  );
}

