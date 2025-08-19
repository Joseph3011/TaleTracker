import Book from "../models/Book.js";

export const addBook = async (req, res) => {
  try {
    const { title, author, status, genre} = req.body;   
    const newBook = new Book({ 
      title, author, status, genre, 
      user: req.user.id 
    });
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id });
    res.json(books);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { title, author, status, genre } = req.body;  
    const updated = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, status, genre },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ msg: "Book deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};
