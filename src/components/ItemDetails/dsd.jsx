import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar} from 'react-icons/fa'

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

       
       // Update state with response.data
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
      <div className="row mt-4   p-3">
        <div className="col-md-4 position-relative ">
          <img
            className="w-100 h-100"
            src={`https://image.tmdb.org/t/p/w500/${itemdetails.poster_path}`}
          />
        </div>
        <div className="col-md-8 ">
          <h2>{itemdetails.title}</h2>
             <h4 className="h6">{itemdetails.release_date}
             <span className="m-5 p-1  bg-danger">{itemdetails.status}</span>
             </h4>
        
          <p className="py-2 h5 ">{itemdetails.overview}</p>
          <h6 className="py-2 text-warning">vote_average :  
            <span className=" text-white" > {parseFloat(itemdetails.vote_average).toFixed(1)}</span> 
          </h6>
          <h6 className="py-2 text-warning">vote_average :  
            <span className=" text-white" > {itemdetails.vote_count}</span> 
          </h6>
          <div>
          {itemdetails.genres && itemdetails.genres.length > 0 && (
              <div>
                <h4>Genres:</h4>
                <div className="row">
                  {itemdetails.genres.map((gen) => (
                    <p className="col-2 text-dark bg-warning border rounded-pill p-1 m-2 text-center" key={gen.id}>{gen.name} </p>
                  ))}
                </div>
              </div>
            )}
</div>
<div className="row py-2"> 
<div className="col-3 " ><h6>Duratio : <span>{itemdetails.runtime} MINS</span></h6>  </div>
<div className="col-3 " ><h6>Language : <span>{itemdetails.original_language}</span> </h6>  </div>

</div>

            <div>
            {itemdetails.production_companies && itemdetails.production_companies.length > 0 && (
              <div>
                <h4>production_companies:</h4>
                <div className="row">
                  {itemdetails.production_companies.map((gen) => (
                 gen.logo_path?   <img className="company-img col-2    p-1 m-2 " key={gen.id} src={ `https://image.tmdb.org/t/p/w500/${gen.logo_path} `} />:''
                  ))}
                </div>
              </div>
            )}
            </div>

        <div className="m-2">
           <i class="fa-solid fa-link"></i> <a href={itemdetails.homepage}>Website</a>
        </div>














        
      </div>
</div>
    </>
  );
}
