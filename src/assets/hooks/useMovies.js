import { useEffect, useState } from "react";

const useMovies = (handleCloseMovie)=>{
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const KEY=import.meta.env.VITE_MOVIE_API_KEY

    useEffect(
        function () {
            async function fetchMovies() {
              try {
                setIsLoading(true);
                setError("");
        
                const res = await fetch(
                  `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                  { signal: controller.signal }
                );
        
                if (!res.ok)
                  throw new Error("Something went wrong with fetching movies");
        
                const data = await res.json();
                if (data.Response === "False") throw new Error("Movie not found");
                setMovies(data.Search);
                setError("");
              } catch (err) {
                if (err.name !== "AbortError") {
                  setError(err.message);
                }
              } finally {
                setIsLoading(false);
              }
            }
          const controller = new AbortController();
          if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
          }
          handleCloseMovie();
          fetchMovies();
    
          return function () {
            controller.abort();
          };
        },
        [query,KEY]
      );    
      return {query,setQuery,movies,isLoading,error }
}

export default useMovies