function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />

      <h3>{book.title}</h3>
      <p>{book.author}</p>

      <div className="bottom">
        <span>₹{book.price}</span>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default BookCard;