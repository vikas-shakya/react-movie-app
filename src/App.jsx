import { useState } from "react";

import MovieCard from "./components/MovieCard";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <MovieCard movie={{ title: "SpiderMan", release_date: "2024" }} />
    </>
  );
}

export default App;
