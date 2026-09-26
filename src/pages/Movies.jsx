import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import movies from "../data/movie";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get("genre");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesGenre =
      !genre || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);

  return () => {
    clearTimeout(timer);
  };
}, [search]);

  return (
    <section className="min-h-screen bg-[#0f0f0f] px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="animate-fade-up mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Movie Collection
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Explore Movies
          </h1>

          <p className="mt-3 max-w-xl text-gray-400">
            Discover movies you might love and find your next favorite story.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md">
            <input
              type="text"
              placeholder="Search movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-800 bg-[#1a1a1a]
              px-4 py-3 text-white shadow-lg shadow-black/20
              outline-none transition duration-300
              placeholder:text-gray-500
              focus:border-red-600 focus:shadow-red-600/10"
            />
          </div>

          {/* Genre Filters */}
          <div className="mt-4 flex flex-wrap gap-3">

            <button
              onClick={() => setSearchParams({})}
              className={`rounded-full px-4 py-2 text-sm transition ${
                !genre
                  ? "bg-red-600 text-white"
                  : "bg-[#242424] text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>

            <button
              onClick={() =>
                setSearchParams({ genre: "Action" })
              }
              className={`rounded-full px-4 py-2 text-sm transition ${
                genre === "Action"
                  ? "bg-red-600 text-white"
                  : "bg-[#242424] text-gray-400 hover:text-white"
              }`}
            >
              Action
            </button>

            <button
              onClick={() =>
                setSearchParams({ genre: "Sci-Fi" })
              }
              className={`rounded-full px-4 py-2 text-sm transition ${
                genre === "Sci-Fi"
                  ? "bg-red-600 text-white"
                  : "bg-[#242424] text-gray-400 hover:text-white"
              }`}
            >
              Sci-Fi
            </button>

            <button
              onClick={() =>
                setSearchParams({ genre: "Drama" })
              }
              className={`rounded-full px-4 py-2 text-sm transition ${
                genre === "Drama"
                  ? "bg-red-600 text-white"
                  : "bg-[#242424] text-gray-400 hover:text-white"
              }`}
            >
              Drama
            </button>

          </div>
        </div>

        {/* Movies */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {filteredMovies.map((movie, index) => (
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
          <div className="flex min-h-300px items-center justify-center">
            <div className="text-center">
              <p className="text-5xl">🎬</p>

              <h2 className="mt-4 text-2xl font-semibold text-white">
                No movies found
              </h2>

              <p className="mt-2 text-gray-500">
                Try searching for another movie.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Movies;