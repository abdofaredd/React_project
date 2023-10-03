import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { removeFromWishlist, addToWishlist } from "../Store/Slice/movieSlice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

export default function ItemDetails() {
  let movieId = useParams();
  const [itemdetails, setitemdatails] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [movierecommend, setmovierecommend] = useState({});
  const dispatch = useDispatch(); // Initialize dispatch
  const wishlist = useSelector((state) => state.wishlistSlice.wishlist);

  async function getMoviesRecommand(movieId) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=dfee8f79eb74cfe829f62960da0d964e`
      );
      setmovierecommend(response.data.results);
      setIsLoading(false);
      console.log(response.data.results);

      // Update state with response.data
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setIsLoading(false);
    }
  }

  async function getMoviesDetails(movieId) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=dfee8f79eb74cfe829f62960da0d964e`
      );
      setitemdatails(response.data);
      setIsLoading(false);

      // Update state with response.data
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMoviesDetails(movieId.id);
    getMoviesRecommand(movieId.id);
  }, []);

  const handleWishlistToggle = (movie) => {
    if (wishlist.some((m) => m === movie)) {
      dispatch(removeFromWishlist(movie));
    } else {
      dispatch(addToWishlist(movie));
    }
  };

  return (
    <>
      <div>
      <div  className="   float-end"
                            onClick={(event) => {
                              handleWishlistToggle(itemdetails.id);
                              event.preventDefault();
                            }}
                          >
                            {wishlist.some((m) => m === itemdetails.id) ? (
                              <Favorite
                                sx={{ color: "131722" }}
                                style={{ cursor: "pointer" }}
                                fontSize="large"
                              />
                            ) : (
                              <FavoriteBorder
                                sx={{ color: "131722" }}
                                fontSize="large"
                                style={{ cursor: "pointer" }}
                              />
                            )}
                          </div>
        <div className="row mt-4   p-3">
          <div className="col-md-4  ">
            <img
              className="w-100 h-100"
              src={`https://image.tmdb.org/t/p/w500/${itemdetails.poster_path}`}
            />
          </div>
          <div className="col-md-8 position-relative ">
         
            <h2>{itemdetails.title}</h2>
            <h4 className="h6">
              {itemdetails.release_date}
              <span className="m-5 p-1  bg-danger">{itemdetails.status}</span>
            </h4>
            
            <p className="py-2 h5   ">{itemdetails.overview}</p>
            <h6 className="py-2 ">
              vote_average : 
              <strong>
              <span className="ms-2">
              
               {parseFloat(itemdetails.vote_average).toFixed(1)}
            </span>
              </strong>
             
            </h6>
            <h6 className="py-2 ">
              vote_average :
           <strong><span  className="ms-2" > {itemdetails.vote_count}</span>
            </strong>   
            </h6>
            <div>
              {itemdetails.genres && itemdetails.genres.length > 0 && (
                <div>
                  <h4>Genres:</h4>
                  <div className="row">
                    {itemdetails.genres.map((gen) => (
                      <p
                        className="col-2 text-dark bg-warning border rounded-pill p-1 m-2 text-center"
                        key={gen.id}
                      >
                        {gen.name}{" "}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="row py-2">
              <div className="col-3 ">
                <h6>
                  Duratio : <span>{itemdetails.runtime} MINS</span>
                </h6>{" "}
              </div>
              <div className="col-3 ">
                <h6>
                  Language : <span>{itemdetails.original_language}</span>{" "}
                </h6>{" "}
              </div>
            </div>
            <div>
              {itemdetails.production_companies &&
                itemdetails.production_companies.length > 0 && (
                  <div>
                    <h4>production_companies:</h4>
                    <div className="row">
                      {itemdetails.production_companies.map((gen) =>
                        gen.logo_path ? (
                          <img
                            className="company-img col-2    p-1 m-2 "
                            key={gen.id}
                            src={`https://image.tmdb.org/t/p/w500/${gen.logo_path} `}
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>

            <div className="m-2">
              <i class="fa-solid fa-link"></i>{" "}
              <a href={itemdetails.homepage} >Website</a>
            </div>
          </div>
        </div>

        <div className="row " style={{}}>
          {movierecommend.length > 0 ? (
            movierecommend.slice(0, 5).map((movie, index) => (
              <div
                key={index}
                className="col-lg-2 col-md-2 mb-5 position-relative"
              >
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
                      className="img_recomand"
                      src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
                      alt="Card image cap"
                    />

                    <div className="card-body d-flex  text-start  flex-column h-25 ">
                      <div className="row justify-content-between h-50 ">
                        <h6 className="card-title fw-bold  " style={{'font-size':'13px'}}>
                          {movie.title}
                        </h6>

                        <div className="col-2 position-absolute top-80 end-0" >
                      
                        </div>
                      </div>
                      <div className="row mt-3 h-25 justify-content-between   align-content-center ">
                        <p className="col-9">
                          {" "}
                          <span>{movie.release_date}</span>
                        </p>
                        <div  className="col-3"
                            onClick={(event) => {
                              handleWishlistToggle(movie.id);
                              event.preventDefault();
                            }}
                          >
                            {wishlist.some((m) => m === movie.id) ? (
                              <Favorite
                                sx={{ color: "131722" }}
                                style={{ cursor: "pointer" }}
                                fontSize="large"
                              />
                            ) : (
                              <FavoriteBorder
                                sx={{ color: "131722" }}
                                fontSize="large"
                                style={{ cursor: "pointer" }}
                              />
                            )}
                          </div>
                      </div>
                      <div className="w-25 px-2 p-1 text-center text-white bg-info top-0 end-0 position-absolute">
                        {parseFloat(movie.vote_average).toFixed(1)}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
           ''
          )}
        </div>
      </div>
    </>
  );
}
