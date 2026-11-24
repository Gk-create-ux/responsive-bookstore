import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";
import books from "./data/books";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Discover Your Next Favorite Book</h1>
        <p>Browse bestselling books at affordable prices.</p>
      </section>

      <section className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>

      <Footer />
    </>
  );
}

export default App;