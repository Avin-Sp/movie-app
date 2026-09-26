import { useNavigate, useParams } from "react-router-dom";
import movies from "../data/movie";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return (
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#0f0f0f]">
        <div className="text-center">
          <p className="text-6xl">🎬</p>

          <h1 className="mt-5 text-3xl font-bold text-white">
            Movie Not Found
          </h1>

          <button
            onClick={() => navigate("/movies")}
            className="mt-6 rounded-lg bg-red-600 px-6 py-3
            font-semibold text-white transition
            hover:bg-red-700"
          >
            Back to Movies
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0f0f0f] px-6 py-16">
      <div className="mx-auto max-w-6xl">

       
        <button
          onClick={() => navigate("/movies")}
          aria-label="Back to Movies"
          className="group mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30">
         <svg
          xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
          className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 18l-6-6 6-6"
    />
  </svg>
</button>

        <div className="grid gap-10 md:grid-cols-[280px_1fr]">

          {/* Poster */}
          <div className="overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-xl shadow-black/30">
            <img
              src={movie.poster}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Movie Details
            </p>

            <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
              {movie.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <span className="rounded-full bg-[#242424] px-4 py-2 text-gray-300">
                {movie.year}
              </span>

              <span className="rounded-full bg-[#242424] px-4 py-2 text-red-500">
                ★ {movie.rating}
              </span>

              <span className="rounded-full bg-[#242424] px-4 py-2 text-gray-300">
                {movie.genre}
              </span>
            </div>

            <p className="mt-8 max-w-2xl leading-8 text-gray-400">
              Explore the story, characters, and world of this movie.
              Add it to your favorites and keep track of the movies
              you love.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;