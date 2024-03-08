import { useEffect, useState } from "react";

const useMovieDetails = (selectedId) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const KEY=import.meta.env.VITE_MOVIE_API_KEY


  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();

    return () => {
      // Cleanup function
    };
  }, [selectedId]);

  return { movie, isLoading,setIsLoading };
};

export default useMovieDetails;
