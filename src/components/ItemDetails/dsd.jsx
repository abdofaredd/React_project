import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetails() {
  let movieId = useParams();
  const [itemdetails, setitemdatails] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  async function getMoviesDetails(movieId) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=dfee8f79eb74cfe829f62960da0d964e`
      );
      setitemdatails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setIsLoading(false); 
    }
  }

  useEffect(() => {
    getMoviesDetails(movieId.id);
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row ">
          <div className="col-md-4 position-relative ">
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/w500/${itemdetails.poster_path}`}
              alt={itemdetails.title}
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
            {/* Conditionally render genres */}
            {itemdetails.genres && itemdetails.genres.length > 0 && (
              <div>
                <h4>Genres:</h4>
                <ul>
                  {itemdetails.genres.map((gen) => (
                    <li key={gen.id}>{gen.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
