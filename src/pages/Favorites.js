import React from "react";
import MovieCard from "../components/MovieCard";

export default function Favorites({
  favorites,
  watchLater,
  onToggleFavorite,
  onToggleWatchLater,
}) {
  return (
    <div className="page">
      <h1>⭐ Favorites</h1>
      {favorites.length === 0 ? (
        <div className="empty card">No favorites yet. Add some from Home!</div>
      ) : null}
      <div className="grid">
        {favorites.map((movie) => (
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

