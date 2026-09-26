import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import MovieDetails from "./pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home/>} />

          <Route
            path="/movies"
            element={<Movies/>}
          />

          <Route
            path="/favorites"
            element={<Favorites/>}
          />

          <Route path="/movies/:id" element={<MovieDetails />} />

           <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
