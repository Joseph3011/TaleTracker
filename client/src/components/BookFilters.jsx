import React from "react";

const BookFilters = ({ search, setSearch, genre, setGenre }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 border rounded-lg w-full sm:w-1/2"
      />
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="px-3 py-2 border rounded-lg"
      >
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Romance">Romance</option>
        <option value="History">History</option>
      </select>
    </div>
  );
};

export default BookFilters;
