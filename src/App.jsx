import MovieCard from "./components/MovieCard";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./css/App.css";
import Favorites from "./pages/Favorites";
import { NavBar } from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
