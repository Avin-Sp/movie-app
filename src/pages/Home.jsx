import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();


  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0f0f0f]">

      {/* Red Glow */}
      <div
        className="absolute left-1/2 top-1/2 z-0 h-500px w-500px
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-red-600/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)]
        max-w-7xl items-center px-6 py-24">

        <div className="max-w-2xl">

          {/* Small title */}
          <p
            className="animate-fade-up mb-4 text-sm font-semibold uppercase
            tracking-[0.3em] text-red-500"
          >
            Welcome to MovieHub
          </p>

          {/* Main title */}
          <h1
            className="animate-fade-up animation-delay-200 text-5xl
            font-bold leading-tight text-white md:text-7xl"
          >
            Discover Your
            <span className="block text-red-600">
              Next Favorite Movie
            </span>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-up animation-delay-400 mt-6 max-w-xl
            text-lg leading-8 text-gray-400"
          >
            Explore thousands of movies, discover new stories,
            and keep track of the films you love.
          </p>

          {/* Buttons */}
          <div
            className="animate-fade-up animation-delay-600 mt-8 flex gap-4"
          >
            <button
             onClick={() => navigate("/movies")}
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold
              text-white transition duration-300 hover:-translate-y-1
              hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
            >
              Explore Movies
            </button>

            <button
              onClick={() => navigate("/favorites")}
              className="rounded-lg border border-gray-700 px-6 py-3
              font-semibold text-gray-300 transition duration-300
              hover:-translate-y-1 hover:border-gray-500 hover:text-white"
            >
              My Favorites
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;