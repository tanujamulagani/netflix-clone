 import React, { useEffect, useState } from 'react';
 import axios from './axios';
 import './Row.css'; 
 import Youtube from 'react-youtube';
 import movieTrailer from 'movie-trailer';

 const base_url = "https://image.tmdb.org/t/p/original";

 function Row({title,fetchUrl,islargeRow})
 {
     const [movies , setMovies]=useState([]);
     const[trailerUrl , setTrailerUrl]=
     useState("");
    //  const [loading, setLoading] = useState(false);
    //  const [error, setError] = useState();

    //a snippet of code which runs based on specific condition
    //useeffect runs after rendering
     useEffect(() =>{
//    if [], run once when the row load and do not run again
     async function fetchdata()
     {
         const request =await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
     }
    fetchdata();
     }, [fetchUrl]);

     const opts =
     {
         height:"390",
         width : "100%",
         playerVars:
         {
            autoplay:1,
         }
     }
     const handleClick=(movie)=>
     {
         if(trailerUrl)
         {
             setTrailerUrl('');
         }
         else
         {
             movieTrailer(movie?.name || "").then(url =>
                {
                   const urlParams =new URLSearchParams(new URL(url).search);
                   setTrailerUrl( urlParams.get('v'));
                }).catch(error  => console.log(error))
         }
     }
     return(
         <div className="row">
             {/* title */}
             <h2>{title}</h2>
 
             {/* container */}
             <div className="row__posters">
                
                {movies.map((movie)=>
                
                     (<img
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    className={`row__poster ${islargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${islargeRow ? movie.poster_path : movie.backdrop_path }`}
                    alt={movie.name}/>

                ))}
                
             </div>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
         </div>
     )
         
     
 }
 export default Row;