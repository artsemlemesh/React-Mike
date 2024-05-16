function Book(props) {
  const { book } = props;
  return (
    <div className="book-item">
      <h2>{book.name}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default Book;
