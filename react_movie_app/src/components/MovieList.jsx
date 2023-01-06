import { useMovieContext } from "../MovieContext";
import Movie from "./Movie";

const MovieList = () => {
  const { movies } = useMovieContext();
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;