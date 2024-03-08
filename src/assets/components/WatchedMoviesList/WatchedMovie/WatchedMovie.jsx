import React from 'react'
import noImage from '/noImage.png'

const WatchedMovie = ({movie,onDeleteWatched,onSelectMovie}) => {
    const { poster,title,imdbRating,userRating,runtime,imdbID} = movie
 console.log(poster);
    return (
        <li>
          <img src={poster=='N/A' ? noImage :poster} alt={`${title} poster`} />
          <h3 onClick={()=>onSelectMovie(imdbID)}>{title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{runtime} min</span>
            </p>
    
            <button
              className="btn-delete"
              onClick={() => onDeleteWatched(imdbID)}
            >
              X
            </button>
          </div>
        </li>
      );
}

export default WatchedMovie