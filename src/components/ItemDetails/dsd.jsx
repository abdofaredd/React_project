import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetails() {
  let movieId = useParams();
  const [itemdetails, setitemdatails] = useState({});
console.log(movieId.id)
   async function getMoviesDetails(movieId) {
     try {
       const response = await axios.get(
         `https://api.themoviedb.org/3/movie/${movieId}?api_key=dfee8f79eb74cfe829f62960da0d964e`
       );
       setitemdatails(response.data);
console.log(response);
       
       // Update state with response.data
     } catch (error) {
       console.error("Error fetching movie details:", error);
     }
   }
  useEffect(() => {
    getMoviesDetails(movieId.id);
  }, []);

  return (
    <>
      <div className="row ">
        <div className="col-md-4 position-relative ">
          <img
            className="w-100"
            src={`https://image.tmdb.org/t/p/w500/${itemdetails.poster_path}`}
          />
        </div>
        <div className="col-md-8 ">
          <h2>{itemdetails.title}</h2>

        
          <p className="py-2 ">{itemdetails.overview}</p>
          <h6 className="py-2 text-warning">
            vote_average : {itemdetails.vote_average}
          </h6>
          <h5 className="h5 py-2 text-warning">
            vote_count :{" "}
            <span className=" text-white">{itemdetails.vote_count}</span>
          </h5>
        </div>
      </div>
    </>
  );
}
