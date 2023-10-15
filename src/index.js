import React from 'react'; //ES6 module
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    id: '162asdc211',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81BFQlGo5XL._AC_UL127_SR127,127_.jpg',
    author: 'John Doe',
    title: 'How to Catch a Witch'
  }, {
    id: '123ssggh14',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL127_SR127,127_.jpg',
    author: 'Myra Bell',
    title: 'Lessons in Chemistry: A Novel'
  }, {
    id: 'axv2123545',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71pL+3nMzfL._AC_UL127_SR127,127_.jpg',
    author: 'Evandre Luke',
    title: 'No Brainer (Diary of a Wimpy Kid Book 18)'
  }
];

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

const Book = (props) => {
  const {img, title, author} = props;
  return(
    <article className='book'>
      <img src ={img} />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  ) 
}

ReactDOM.render(<BookList />, document.getElementById('root'));