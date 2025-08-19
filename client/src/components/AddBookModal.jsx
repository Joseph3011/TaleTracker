import React, { useState, useEffect } from "react";

const AddBookModal = ({ isOpen, onClose, onSave, editingBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("Not Started");

  // Pre-fill fields if editing a book
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setGenre(editingBook.genre);
      setStatus(editingBook.status);
    } else {
      setTitle("");
      setAuthor("");
      setGenre("");
      setStatus("Not Started");
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      _id: editingBook ? editingBook._id : null, // handle MongoDB _id
      title,
      author,
      genre,
      status,
    });

    onClose();
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {editingBook ? "Edit Book" : "Add New Book"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Romance">Romance</option>
            <option value="History">History</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option>Not Started</option>
            <option>Reading</option>
            <option>Completed</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            {editingBook ? "Update Book" : "Add Book"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-3 w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddBookModal;
