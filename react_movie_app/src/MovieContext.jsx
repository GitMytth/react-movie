import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [allGenres, setAllGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3005/movies/?q=" + searchTerm)
      .then((res) => res.json())
      .then((data) =>
        setMovies(
          data.filter((movie) =>
            selectedGenres.every((genre) => movie.genres.includes(genre))
          )
        )
      )
      .catch((err) => {
        console.error(err);
      });
  }, [searchTerm, selectedGenres]);

  useEffect(() => {
    fetch("http://localhost:3005/genres")
      .then((res) => res.json())
      .then((data) => setAllGenres(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        searchTerm,
        setSearchTerm,
        selectedMovie,
        setSelectedMovie,
        allGenres,
        setAllGenres,
        selectedGenres,
        setSelectedGenres,
        showFilter,
        setShowFilter,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieContextProvider;