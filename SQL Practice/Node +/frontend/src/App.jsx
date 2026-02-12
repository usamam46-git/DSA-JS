import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/api/books";

function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    cover_url: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, formData);
      }
      setFormData({ title: "", author: "", description: "", cover_url: "" });
      fetchBooks();
    } catch (err) {
      console.error("Error saving book:", err);
    }
  };

  const handleEdit = (book) => {
    setFormData({
      title: book.title,
      author: book.author,
      description: book.description,
      cover_url: book.cover_url || "",
    });
    setEditingId(book.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchBooks();
      } catch (err) {
        console.error("Error deleting book:", err);
      }
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>BookQuest</h1>
        <p>A Modern Full-Stack Library Management System</p>
      </header>

      <form className="book-form-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group full-width">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Write a short summary..."
            rows="3"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group full-width">
          <label>Cover Image URL</label>
          <input
            type="url"
            name="cover_url"
            placeholder="https://images.unsplash.com/..."
            value={formData.cover_url}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn" id="submit-book">
          {editingId ? "Update Book Details" : "Add to Library"}
        </button>
      </form>

      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card" id={`book-${book.id}`}>
            <img
              src={book.cover_url || "https://images.unsplash.com/photo-1543004218-ee14110497f8?auto=format&fit=crop&q=80&w=1000"}
              alt={book.title}
              className="book-cover"
            />
            <div className="book-info">
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
              <p>{book.description}</p>
            </div>
            <div className="card-actions">
              <button
                className="action-btn edit"
                onClick={() => handleEdit(book)}
              >
                Edit
              </button>
              <button
                className="action-btn delete"
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
