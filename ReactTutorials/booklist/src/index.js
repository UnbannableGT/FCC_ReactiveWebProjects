import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/918sHoEOD8L._AC_UL200_SR200,200_.jpg',
    title: 'Llama Llama I love You',
    author: 'Anna Dewdney'
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41bChkOa4zL._AC_UL200_SR200,200_.jpg',
    title: 'Think Again: The Power of Knowing What You Don\'t Know',
    author: 'Adam Grant'
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81ux0cp6p0L._AC_UL200_SR200,200_.jpg',
    title: 'Walk in My Combat Boots',
    author: 'James Patterson and Matt Eversmann'
  },
];


function BookList() {
  return (
    <section className="booklist">{books.map((book) => {
      return(
        <Book key={book.id} {...book}></Book>
      )
    })}</section>
  ); 
}

const Book = ({ img, title, author }) => {
  const complexExample = (author) => {
    alert(author);
  }
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  }
  return (
    <article className="book" onMouseOver={() => {
      console.log(title);
    }}>
    <img src={img} />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>Test Button</button>
    <button type="button" onClick={() => complexExample(author)}>Complex Button</button>
  </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));
