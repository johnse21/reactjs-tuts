import React from 'react'

const Book = (props) => {
  const {img, title, author} = props;

  const clickHandler = (title) => {
    console.log(title);
  }

  const mouseOverHandler = (title) => {
    console.log(title);
  }


  return(
    <article 
      className='book' 
      onMouseOver= {() => mouseOverHandler(title)}>
        <img src ={img} />
        <h3>{title}</h3>
        <h4>{author}</h4>
        <button 
          type='button' 
          onClick={() => clickHandler(title)}
        >Ref</button>
    </article>
  ) 
}

export default Book;