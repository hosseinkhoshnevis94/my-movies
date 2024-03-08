import React from 'react'
import WatchedMovie from './WatchedMovie/WatchedMovie';

const WatchedMoviesList = ({ watched, onDeleteWatched,onSelectMovie }) => {
    return (
        <ul className="list">
          {watched?.map((movie) => (
            <WatchedMovie
              movie={movie}
              key={movie.imdbID}
              onDeleteWatched={onDeleteWatched}
              onSelectMovie={onSelectMovie}
            />
          ))}
        </ul>
      );
}

export default WatchedMoviesList