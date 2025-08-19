import React from "react";

const BookList = ({ books, onEdit, onDelete }) => {
  if (books.length === 0) {
    return <p className="text-gray-500">No books found.</p>;
  }

  return (
    <div className="grid gap-4">
      {books.map((book) => (
        <div
          key={book._id}
          className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-sm text-gray-500">Genre: {book.genre}</p>
            <p className="text-sm text-gray-500">
              Status:{" "}
              <span className="font-medium">
                {book.status || "Not started"}
              </span>
            </p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(book)}
              className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(book._id)} //pass _id
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
