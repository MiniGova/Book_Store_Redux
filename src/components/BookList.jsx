import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../Redux/actions';

const BookList = () => {
  const books = useSelector((state) => state.Book.books);
  const dispatch = useDispatch();

  return (
    <div className='container mt-4'>
      <h3>📚 Book List</h3>
      {books.length === 0 && <p>No books available</p>}
      <ul className="list-group">
        {books.map(book => (
          <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{book.name}</strong> by {book.author}
            </div>
            <div>
              <Link to={`/book/${book.id}`} className="btn btn-info btn-sm me-2">View</Link>
              <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;