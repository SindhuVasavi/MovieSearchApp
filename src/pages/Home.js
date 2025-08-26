import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const API_KEY = "thewdb"; // 🔑 replace with your OMDb key if you have one

export default function Home({
  favorites,
  watchLater,
  onToggleFavorite,
  onToggleWatchLater,
}) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchMovies() {
    const q = search.trim();
    if (!q) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(q)}`
      );
      const data = await res.json();
      if (data.Response === "False") {
        setMovies([]);
        setError(data.Error || "No results");
      } else {
        setMovies(data.Search);
      }
    } catch (e) {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  // default content on first load
  useEffect(() => {
    (async () => {
      setSearch("Avengers");
      await new Promise((r) => setTimeout(r, 0));
      fetchMovies();
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page">
      <h1>🎬 Movie Explorer</h1>

      <div className="card search-card">
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearch={fetchMovies}
          loading={loading}
        />
      </div>

      {error ? <div className="error">{error}</div> : null}
      {!error && !loading && !movies.length ? (
        <div className="empty card">Start by searching for a movie 🙂</div>
      ) : null}

      <div className="grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            favorites={favorites}
            watchLater={watchLater}
            onToggleFavorite={onToggleFavorite}
            onToggleWatchLater={onToggleWatchLater}
          />
        ))}
      </div>
    </div>
  );
}

