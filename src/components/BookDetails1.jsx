import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails1 = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.Book.books.find((b) => b.id === id)
  );

  if (!book) return <div className="text-center mt-5">Book not found</div>;

  return (
    <div className="container mt-4">
      <h3>📖 {book.name}</h3>
      <p><strong>ID:</strong> {book.id}</p>
      <p><strong>Author:</strong> {book.author}</p>
    </div>
  );
};

export default BookDetails1;