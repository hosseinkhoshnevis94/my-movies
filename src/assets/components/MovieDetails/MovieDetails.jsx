import { useEffect, useRef, useState } from "react";
import Loader from "../Loader/Loader";
import StarRating from "../StarRating/StarRating";
import useMovieDetails from "../../hooks/useMovieDetails";
import useKey from "../../hooks/useKey";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import noImage from '/noImage.png'
import './movieDetails.css'
export default function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const { movie, isLoading } = useMovieDetails(selectedId);
  const [userRating, setUserRating] = useState("");
  const countRef = useRef(0);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    Awards:awards
    
  } = movie;
  console.log(movie);
  //closing movie by scape key
  useKey("Escape",onCloseMovie)
  //changing the document title
  useDocumentTitle(title)

    useEffect(
      function () {
        if (userRating) countRef.current++;
      },
      [userRating]
    );
  
    const isWatched = watched?.map((movie) => movie.imdbID).includes(selectedId);
    const watchedUserRating = watched?.find(
      (movie) => movie.imdbID === selectedId
    )?.userRating;
  
  
    function handleAdd() {
      const newWatchedMovie = {
        imdbID: selectedId,
        title,
        year,
        poster,
        imdbRating: Number(imdbRating),
        runtime: Number(runtime.split(" ").at(0)),
        userRating,
        countRatingDecisions: countRef.current,
      };
  
      onAddWatched(newWatchedMovie);
      onCloseMovie();
    }


    return (
      <div className="details">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <header>
              <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
              <img src={movie.Poster=='N/A' ? noImage :movie.Poster} alt={`Poster of ${movie} movie`} />
              <div className="details-overview">
                <h2>{title}</h2>
                <p>
                  {released} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>
                  IMDb: {imdbRating} 
                </p>
              </div>
            </header>
  
            <section>
              <div className="rating">
                {!isWatched ? (
                  <>
                     <StarRating
                     color='#9E4784'
                      maxRating={10}
                      size={22}
                      onSetRating={setUserRating}
                    /> 
                    {
                      <button className="btn-add" onClick={handleAdd}>
                        + Add to list
                      </button>
                    }
                  </>
                ) : (
                  <p>
                    You rated with movie {watchedUserRating}/10
                  </p>
                )}
              </div>
              <p><span>Summary:</span> {plot}</p>
              <p> <span>Starring:</span> {actors}</p>
              <p><span>Directed by:</span> {director}</p>
              <p><span>Awards:</span> {awards}</p>
            </section>
          </>
        )}
      </div>
    );
  }