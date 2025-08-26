import React from "react";
import MovieCard from "../components/MovieCard";

export default function WatchLater({
  favorites,
  watchLater,
  onToggleFavorite,
  onToggleWatchLater,
}) {
  return (
    <div className="page">
      <h1>⏰ Watch Later</h1>
      {watchLater.length === 0 ? (
        <div className="empty card">Nothing here yet. Add movies to watch later!</div>
      ) : null}
      <div className="grid">
        {watchLater.map((movie) => (
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

