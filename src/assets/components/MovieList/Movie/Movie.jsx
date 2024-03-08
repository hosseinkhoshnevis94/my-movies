import React from 'react'
import noImage from '/noImage.png'
const Movie = ({ movie, onSelectMovie }) => {
  const { Poster,Title,Year,imdbID} = movie

    return (
        <li onClick={() => onSelectMovie(imdbID)}>
          <img src={Poster=='N/A' ? noImage :Poster} alt={`${Title} poster`} />
          <h3>{Title}</h3>
          <div>
            <p>
              <span>{Year}</span>
            </p>
          </div>
        </li>
      );
}

export default Movie