//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';

const list = [
 {
  "id": 2,
  "title": "Second Item",
  "body": "text"
 },
 {
  "id": 3,
  "title": "Learn HTTP",
  "body": "body ..................."
 },
 {
  "id": 4,
  "title": "4th todo",
  "body": "......."
 },
 {
  "id": 5,
  "title": "5th todo",
  "body": "Continue"
 }
]
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { list };
	}
	render() {
	  return (
		<div>
		  {this.state.list.map(item => (
			<div key={item.id}>
			<h1>{item.title}</h1>
			<p>{item.body}</p>
		    </div>
		  ))}
		</div>
	  );
	}
}

export default App;
