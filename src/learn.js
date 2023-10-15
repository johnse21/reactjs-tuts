import React from 'react'; //ES6 module
import ReactDOM from 'react-dom';

//JSX Rules
//return single element
//div/section/article or fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting

// function Greeting() {
//   return (
//     <React.Fragment>
//       <div>
//         <h4>Hello world</h4>
//       </div>
//     </React.Fragment>
//   )
// }

//same as above
// function Greeting() {
//   return (
//     <>
//       <div>
//         <h4>Hello world</h4>
//       </div>
//     </>
//   )
// }

// const Greeting = () => {
//   //element, props, children
//   return React.createElement('h1', {}, 'Hello World');
// }

function Greeting() {
  return (
    <>
      <div>
         <Person/>
         <Message/>
      </div>
    </>
  )
}

const Person = () => <h2>John</h2>;
const Message = () => {
  return <h4>Hello world</h4>;
}

ReactDOM.render(<Greeting/>, document.getElementById('root'));