import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ favoritesCount, watchLaterCount }) {
  const { pathname } = useLocation();
  return {
    /* semantic nav */
  } && (
    <nav className="navbar">
      <div className="brand">🎬 Movie Explorer</div>
      <div className="links">
        <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={pathname === "/favorites" ? "active" : ""} to="/favorites">
          ⭐ Favorites <span className="counter">{favoritesCount}</span>
        </Link>
        <Link className={pathname === "/watchlater" ? "active" : ""} to="/watchlater">
          ⏰ Watch Later <span className="counter">{watchLaterCount}</span>
        </Link>
      </div>
    </nav>
  );
}
