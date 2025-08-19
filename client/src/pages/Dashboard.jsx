import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";   
import BookList from "../components/BookList";
import BookFilters from "../components/BookFilters";
import AddBookModal from "../components/AddBookModal";
import api from "../services/api";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const navigate = useNavigate();

  //Fetch books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/books");
        setBooks(res.data);
      } catch (err) {
        console.error("Error fetching books:", err.response?.data || err.message);
      }
    };
    fetchBooks();
  }, []);

  //Add or Update book
  const addOrUpdateBook = async (book) => {
    try {
      if (book._id) {
        const res = await api.put(`/books/${book._id}`, book);
        setBooks(books.map((b) => (b._id === book._id ? res.data : b)));
      } else {
        const res = await api.post("/books", book);
        setBooks([...books, res.data]);
      }
    } catch (err) {
      console.error("Error saving book:", err.response?.data || err.message);
    }
  };

  //Delete book
  const deleteBook = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      setBooks(books.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Error deleting book:", err.response?.data || err.message);
    }
  };

  //Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  //Filtering
  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre ? b.genre === genre : true)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Greeting + Logout */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">📚 Hello, Reader!</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <p className="text-gray-500 mb-6">Manage your personal library below.</p>

        {/* Filters + Add Button */}
        <div className="flex justify-between items-center mb-6">
          <BookFilters
            search={search}
            setSearch={setSearch}
            genre={genre}
            setGenre={setGenre}
          />
          <button
            onClick={() => {
              setEditingBook(null);
              setIsModalOpen(true);
            }}
            className="ml-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            + Add Book
          </button>
        </div>

        {/* Book List */}
        <BookList
          books={filteredBooks}
          onEdit={(book) => {
            setEditingBook(book);
            setIsModalOpen(true);
          }}
          onDelete={deleteBook}
        />

        {/* Add/Edit Modal */}
        <AddBookModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={addOrUpdateBook}
          editingBook={editingBook}
        />
      </div>
    </div>
  );
};

export default Dashboard;
