import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components"
import Book from './Book';
import axios from 'axios';

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap: wrap;
justify-contents:space-between;
`;

//container to hold each posted books

const Books = ({ cat, filters, sort }) => {
  const [Books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/books/find?category=${cat}`
            : "http://localhost:5000/api/books/find?category=fiction"
        );
        setBooks(res.data);
      } catch (err) {}
    };
    getBooks();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredBooks(
        Books.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [Books, cat, filters]);

  useEffect(() => {
    if ((sort === "newest")) {
      setFilteredBooks((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if ((sort === "asc")) {
      setFilteredBooks((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredBooks((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
   {cat
       ?filteredBooks.map((item) => 
       <Book item = {item} key={item.id}/>)
       :Books
            .slice(0,5)
            .map((item) => <Book item={item} key={item.id} />)}
    </Container>
  );
};

export default Books
