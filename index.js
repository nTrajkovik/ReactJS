import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// let element = <div className="demo">JSX syntax</div>;

// //stateless component
// let EmailInput = function () { 
//   return (
//     <p>
//       <label htmlFor="email">Email: </label>
//       <input type="email" id="email" />
//     </p>
//   );
// }
// //stateless component
// let NameInput = function () { 
//   return (
//     <p>
//       <label htmlFor="firstName">First Name:</label>
//       <input type="text" id="firstName" />
//     </p>
//   );
// }

// //stateless component
// let Input = function (props) { 
//     return (
//     <p>
//       <label htmlFor={props.id}>{props.label}</label>
//       <input type={props.text} id={props.id} />
//     </p>
//   );
// }
/*
ReactDOM.render(
  // <App />,
  // element,
  <div>
    <Input label="First Name :" type="text" id="firstName"/>
    <Input label="Email :" type="email" id="email" />
  </div>
  ,
  document.getElementById('root')
);

stateful component
class Timer extends React.Component {
  render() {
    return (
      <div onClick={this.props.handleClickFunction} className="timer">{this.props.startValue}</div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: props.startValue
    }
    setInterval(() => {
      this.setState({startValue: this.state.startValue - 1});
     }, 1000);
  }
  handleClick = (e) => {
    this.setState({startValue: this.props.startValue});
  }
  render(){
    return (
      <div> 
        <Timer handleClickFunction = {this.handleClick} startValue={this.state.startValue} />
        <button onClick={this.handleClick}>Restart timer</button>
      </div>
    );
  };
}
*/
// ReactDOM.render(
//   <App startValue="100"/>,
//   document.getElementById('root')
// );

let books = [
  {
    title: "Game of Balls",
    author: "Putin"
  },
  {
    title: "Dawn of ceramics",
    author: "J.K. Rowling"
  },
  {
    title: "Moonwalk",
    author: "Michael Jackson"
  }
];
class Book extends React.Component {
  render() {
    return (
      <li>{this.props.title} -- {this.props.author}</li>
    );
  }
}
class BookList extends React.Component {
  constructor(props){
    super(props);
    this.state = {booksList: this.props.booksList}
  }

  render() {
    return (
      <ul>
        {this.state.booksList.map((book, i) => {
          return <Book onClick={this.clickHandler} key={i} title={book.title} author={book.author}/>
        })}
      </ul>
    );
  }
}

ReactDOM.render(
  <BookList booksList={books}/>,
  document.getElementById('root')
);
