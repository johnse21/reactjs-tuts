import React from 'react'; //ES6 module
import ReactDOM from 'react-dom';
import './index.css';
import {books} from './data/books';
import Book from './Book';

function BookList(){
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book 
            key = {book.id} 
            {...book}
          />
        )
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));