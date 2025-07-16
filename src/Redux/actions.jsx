export const addBook = (book) => ({
  type: "ADD_BOOK", 
  payload: book,
});

export const deleteBook = (id) => ({
  type: "DELETE_BOOK",
  payload: id,
});
