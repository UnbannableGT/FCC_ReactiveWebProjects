import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
  )
}

const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/91NKthYHyZL._AC_UL200_SR200,200_.jpg" alt="" />
  )
}

const Title = () => <h1>The Four Winds</h1>

const Author = () => <h4 style={{color:'#617d98', fontSize: '0.75rem', marginTop: '.75rem'}}>Kristin Hannah</h4>

ReactDOM.render(<BookList />, document.getElementById('root'));
