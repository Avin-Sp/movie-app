
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-gray-800 bg-[#0f0f0f]">
      <div className="mx-auto max-w-7xl px-6 py-5">

        {/* Top Bar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-white">MOVIE</span>
            <span className="text-red-600">HUB</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "text-gray-400 transition hover:text-white"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "text-gray-400 transition hover:text-white"
              }
            >
              Movies
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "text-gray-400 transition hover:text-white"
              }
            >
              Favorites
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center
            rounded-lg bg-[#1a1a1a] text-gray-300
            transition hover:bg-[#242424] hover:text-white
            md:hidden"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-5 border-t border-gray-800 pt-5 md:hidden">
            <div className="flex flex-col gap-4">

              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 transition ${
                    isActive
                      ? "bg-red-600/10 text-red-500"
                      : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/movies"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 transition ${
                    isActive
                      ? "bg-red-600/10 text-red-500"
                      : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                Movies
              </NavLink>

              <NavLink
                to="/favorites"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 transition ${
                    isActive
                      ? "bg-red-600/10 text-red-500"
                      : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                Favorites
              </NavLink>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

