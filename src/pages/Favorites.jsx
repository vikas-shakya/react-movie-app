import "../css/Favorite.css";
import { useMovieContext } from "../contexts/MovieContext";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return <div className="favorites-empty"></div>;
};

export default Favorites;
