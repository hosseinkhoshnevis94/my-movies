import { useState } from "react";
import NavBar from "./assets/components/NavBar/NavBar";
import SearchInput from "./assets/components/SearchInput/SearchInput";
import MovieDetails from "./assets/components/MovieDetails/MovieDetails";
import Main from "./assets/components/Main/Main";
import Box from "./assets/components/Box/Box";
import WatchedMoviesList from "./assets/components/WatchedMoviesList/WatchedMoviesList";
import MovieList from "./assets/components/MovieList/MovieList";
import WatchedSummary from "./assets/components/WatchedSummary/WatchedSummary";
import ErrorMessage from "./assets/components/ErrorMessage/ErrorMessage";
import Loader from "./assets/components/Loader/Loader";
import NumResults from "./assets/components/NumResult/NumResult";
import useLocalStorage from "./assets/hooks/useLocalstorage";
import useMovies from "./assets/hooks/useMovies";
import scrollToTop from "./assets/utils/scrollToTop";
import BackToTop from "./assets/components/BackToTop/BackToTop";
import Footer from "./assets/components/Footer/Footer";


 const App = () => {
  const {query,setQuery,movies,isLoading,error } = useMovies(handleCloseMovie)
  const {value:watched, setValue:setWatched} = useLocalStorage('watched',[])
  const [selectedId, setSelectedId] = useState(null);

  
  function handleSelectMovie(id) {
    setSelectedId(id);
    scrollToTop()
    
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

 

  return (
    <>

      <div className="container">
      <NavBar>
        <SearchInput query={query} setQuery={setQuery} />
       {movies?.length>0 && <NumResults movies={movies} />}
      </NavBar>
      <Main>
      <Box className='box30 colorful-border'>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
                onSelectMovie={handleSelectMovie}
              />
            </>
          )}
        </Box>
       { <Box className='box70' type="border">
          {isLoading &&  <Loader></Loader>}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage>{error+"!"}</ErrorMessage>}
        </Box>}
      </Main>
      <BackToTop></BackToTop>
      </div>
      <Footer></Footer>

    </>
  );
}

export default  App 