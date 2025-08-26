import React from "react";

const PLACEHOLDER = (title) =>
  `https://placehold.co/400x600?text=${encodeURIComponent(title)}`;

export default function MovieCard({
  movie,
  favorites,
  watchLater,
  onToggleFavorite,
  onToggleWatchLater,
}) {
  const isFav = favorites.some((m) => m.imdbID === movie.imdbID);
  const isLater = watchLater.some((m) => m.imdbID === movie.imdbID);
  const poster =
    movie.Poster && movie.Poster !== "N/A" ? movie.Poster : PLACEHOLDER(movie.Title);

  return (
    <div className="movie-card">
      <img className="poster" src={poster} alt={movie.Title} />
      <div className="movie-body">
        <div className="title" title={movie.Title}>{movie.Title}</div>
        <div className="meta">
          <span className="badge">{movie.Year}</span>
          <span className="badge">{movie.Type || "movie"}</span>
        </div>
        <div className="actions">
          <button
            className={isFav ? "btn solid" : "btn"}
            onClick={() => onToggleFavorite(movie)}
          >
            {isFav ? "★ Favorited" : "☆ Favorite"}
          </button>
          <button
            className={isLater ? "btn solid alt" : "btn alt"}
            onClick={() => onToggleWatchLater(movie)}
          >
            {isLater ? "⏳ In Watch Later" : "⏰ Watch Later"}
          </button>
        </div>
      </div>
    </div>
  );
}
