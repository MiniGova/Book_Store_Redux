import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/actions';

function AddBook() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (id && name && author) {
      dispatch(addBook({ id, name, author }));
      setId('');
      setName('');
      setAuthor('');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add a New Book</h3>
      <input className="form-control mb-2" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input className="form-control mb-2" placeholder="Book Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="form-control mb-2" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button className="btn btn-primary" onClick={handleAdd}>Add Book</button>
    </div>
  );
}

export default AddBook;
