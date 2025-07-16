import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./components/AddBook";

import BookDetails1 from "./components/BookDetails1";
import BookList from "./components/BookList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails1 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;