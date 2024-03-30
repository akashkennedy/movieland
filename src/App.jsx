import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = "https:www.omdbapi.com?apikey=612ffaac";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="container">
      <div className="search">
        <input
          type="search"
          placeholder="Search For Movies"
          maxLength={50}
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>
      <div className="wrapper">
      {movies?.length > 0 ? (
        <div className="movie">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.Title} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2 hidden>No Movies Found</h2>
        </div>
      )}
      </div>
      </div>
  );
};

export default App;
