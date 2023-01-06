import { useMovieContext } from "../MovieContext";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SearchFilmInput from "./SearchFilmInput";
import MovieList from "./MovieList";


const MovieListContainer = () => {
  const { movies, setShowFilter } = useMovieContext();
  const navigate = useNavigate();

  return (
    <aside>
      <SearchFilmInput />
      <button
        onClick={() => setShowFilter((prevState) => !prevState)}
        className="filter__button"
      >
        Фильтры
      </button>
      <MovieList />
      <div className="movie__list-footer">
        <p>Найдено {movies.length} элементов</p>
        <button onClick={() => navigate("/createMovie")}>
          <AiOutlinePlus />
          Добавить
        </button>
      </div>
    </aside>
  );
};

export default MovieListContainer;