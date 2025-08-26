import React from "react";
import "../App.css";

const MovieList = ({ movies, addToFavorites, addToWatchLater }) => {
  return (
    <div className="movie-list">
      {movies && movies.length > 0 ? (
        movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/150"
              }
              alt={movie.Title}
            />
            <div className="movie-details">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <div className="movie-actions">
                <button onClick={() => addToFavorites(movie)}>⭐ Favorite</button>
                <button onClick={() => addToWatchLater(movie)}>
                  ⏰ Watch Later
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No movies found...</p>
      )}
    </div>
  );
};

export default MovieList;
