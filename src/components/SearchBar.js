import React from "react";

export default function SearchBar({ search, setSearch, onSearch, loading }) {
  const handleKey = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies or series…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
      />
      <button onClick={onSearch} disabled={loading}>
        {loading ? "Searching…" : "Search"}
      </button>
    </div>
  );
}
