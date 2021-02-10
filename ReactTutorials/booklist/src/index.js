import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/918sHoEOD8L._AC_UL200_SR200,200_.jpg',
  title: 'Llama Llama I love You',
  author: 'Anna Dewdney'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41bChkOa4zL._AC_UL200_SR200,200_.jpg',
  title: 'Think Again: The Power of Knowing What You Don\'t Know',
  author: 'Adam Grant'
}

function BookList() {
  return (
    <section className="booklist">
      <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author} 
      />
      <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author} 
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam labore distinctio officia reiciendis, soluta voluptates sapiente aperiam molestias minima ex, tenetur amet commodi beatae? Velit asperiores ex nam fugiat!</p>
      </Book >
    </section>
  )
}

const Book = (props) => {
  const {img, title, author} = props;
  console.log(props);
  return (
    <article className="book">
    <img className="book" src={img} />
    <h1 className="book">{title}</h1>
    <h4 className="book">{author}</h4>
    {props.children}
  </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));
