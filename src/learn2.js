import React from 'react'; //ES6 module
import ReactDOM from 'react-dom';
import './learn2.css';

function BookList(){
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return(
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  ) 
}

const Image = () => <img src ="https://images-na.ssl-images-amazon.com/images/I/81BFQlGo5XL._AC_UL127_SR127,127_.jpg" />

const Title = () => <h3>How to Catch a Witch</h3>
const Author = () => <h4>John Doe</h4>

ReactDOM.render(<BookList />, document.getElementById('root'));