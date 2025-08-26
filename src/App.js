import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import WatchLater from "./pages/WatchLater";

export default function App() {
  // persist favorites
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("favorites")) || []; }
    catch { return []; }
  });

  // persist watch later
  const [watchLater, setWatchLater] = useState(() => {
    try { return JSON.parse(localStorage.getItem("watchLater")) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);

  // helpers
  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const exists = prev.some(m => m.imdbID === movie.imdbID);
      return exists ? prev.filter(m => m.imdbID !== movie.imdbID) : [movie, ...prev];
    });
  };

  const toggleWatchLater = (movie) => {
    setWatchLater(prev => {
      const exists = prev.some(m => m.imdbID === movie.imdbID);
      return exists ? prev.filter(m => m.imdbID !== movie.imdbID) : [movie, ...prev];
    });
  };

  return (
    <Router>
      <div className="app">
        <Navbar
          favoritesCount={favorites.length}
          watchLaterCount={watchLater.length}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                watchLater={watchLater}
                onToggleFavorite={toggleFavorite}
                onToggleWatchLater={toggleWatchLater}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                watchLater={watchLater}
                onToggleFavorite={toggleFavorite}
                onToggleWatchLater={toggleWatchLater}
              />
            }
          />
          <Route
            path="/watchlater"
            element={
              <WatchLater
                favorites={favorites}
                watchLater={watchLater}
                onToggleFavorite={toggleFavorite}
                onToggleWatchLater={toggleWatchLater}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
