import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const favorites = useSelector(
    (state) => state.favorites.items
  );

  return (
    <section className="min-h-screen bg-[#0f0f0f] px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="animate-fade-up mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Your Collection
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Favorites
          </h1>

          <p className="mt-3 text-gray-400">
            Movies you saved to your favorite collection.
          </p>
        </div>

        {/* Favorites */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {favorites.map((movie, index) => (
              <div
                key={movie.id}
                className="animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-400px items-center justify-center">
            <div className="text-center">

              {/* Heart Icon */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1a1a1a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-10 w-10 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                  />
                </svg>
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-white">
                No Favorites Yet
              </h2>

              <p className="mt-2 text-gray-500">
                Start adding movies to your favorites.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Favorites;