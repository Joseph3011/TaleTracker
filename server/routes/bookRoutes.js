import express from "express";
import { addBook, getBooks, updateBook, deleteBook } from "../controllers/bookController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(auth); // protect all routes
router.post("/", addBook);
router.get("/", getBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
