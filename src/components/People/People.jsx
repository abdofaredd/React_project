import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { removeFromWishlist ,addToWishlist} from "../Store/Slice/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
// import { Favorite, FavoriteBorder } from "@mui/icons-material";









export default function People() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlistSlice.wishlist);



  const handleSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=dfee8f79eb74cfe829f62960da0d964e&query=${searchQuery}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setSearched(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="text-center mt-3">Movie Search</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a movie name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="row text-center position-relative">
        {searched ? (
          movies.length > 0 ? (
            movies.map((movie, index) => (
              <div className="col-lg-3 col-md-3 mb-5 position-relative" key={index}>
                <Link
                  pro={movie}
                  className="text-decoration-none"
                  to={`/movieinfo/${movie.id}`}
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

                      <div
                        className={`wishlist ${
                          wishlist.some((m) => m === movie.id) ? "filled" : ""
                        }`}
                        onClick={(event) => {
                          dispatch(
                            wishlist.some((m) => m === movie.id)
                              ? removeFromWishlist(movie.id)
                              : addToWishlist(movie.id)
                          );
                          event.preventDefault();
                        }}
                      >
                        {wishlist.some((m) => m === movie.id) ? (
                          <Favorite
                            sx={{ color: '131722' }}
                            style={{ cursor: "pointer" }}
                            fontSize="large"
                          />
                        ) : (
                          <FavoriteBorder
                            sx={{ color: '131722' }}
                            fontSize="large"
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </div>

                      <div className="w-25 text-white bg-info top-0 end-0 position-absolute">
                      {parseFloat(movie.vote_average).toFixed(1)}

                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Movie not found</p>
          )
        ) : (
          <p className="mt-">Enter a movie to search for</p>
        )}
      </div>
    </div>
  );
}

