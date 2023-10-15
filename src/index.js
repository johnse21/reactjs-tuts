import React from 'react'; //ES6 module
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81BFQlGo5XL._AC_UL127_SR127,127_.jpg',
    author: 'John Doe',
    title: 'How to Catch a Witch'
  }, {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL254_SR254,254_.jpg',
    author: 'Myra Bell',
    title: 'Lessons in Chemistry: A Novel'
  }
]

function BookList(){
  return (
    <section className='booklist'>
      <Book 
        img = {firstBook.img}
        author = {firstBook.author}
        title = {firstBook.title}
      />
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