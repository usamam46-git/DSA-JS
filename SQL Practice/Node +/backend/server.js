import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool, { initDB } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Database
initDB();

// --- API Routes ---

// GET all books
app.get("/api/books", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM books");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new book
app.post("/api/books", async (req, res) => {
    const { title, author, description, cover_url } = req.body;
    try {
        const [result] = await pool.query(
            "INSERT INTO books (title, author, description, cover_url) VALUES (?, ?, ?, ?)",
            [title, author, description, cover_url]
        );
        res.json({ id: result.insertId, title, author, description, cover_url });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE a book
app.delete("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM books WHERE id = ?", [id]);
        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE a book
app.put("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    const { title, author, description, cover_url } = req.body;
    try {
        await pool.query(
            "UPDATE books SET title = ?, author = ?, description = ?, cover_url = ? WHERE id = ?",
            [title, author, description, cover_url, id]
        );
        res.json({ id, title, author, description, cover_url });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
