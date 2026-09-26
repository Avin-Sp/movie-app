 import { useNavigate } from "react-router-dom";
 import { useDispatch, useSelector } from "react-redux";
 import {
  addToFavorites,
  removeFromFavorites,
} from "../features/favorites/favoritesSlice";
 
 
 
function MovieCard({ movie }) {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.some((favorite) => favorite.id === movie.id);

  const handleFavorite = (e) => {
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };


  return (
    <article 
    onClick={() => navigate(`/movies/${movie.id}`)}
    className="group overflow-hidden rounded-xl bg-[#1a1a1a] shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/10">

     {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        aria-label={
          isFavorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isFavorite ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.8"
          className={`h-5 w-5 transition-colors duration-300 ${
            isFavorite
              ? "text-red-500"
              : "text-white"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
          />
        </svg>
      </button>


       {/* Poster */}
      <div className="aspect-2/3 overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
        {/* Movie Info */}
      <div className="p-4">
        <h2 className="truncate text-lg font-semibold text-white">
          {movie.title}
        </h2>

        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-gray-400">
            {movie.year}
          </span>

          <span className="text-red-500">
            ★ {movie.rating}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          {movie.genre}
        </p>
      </div>

    </article>
  );
}

export default MovieCard;