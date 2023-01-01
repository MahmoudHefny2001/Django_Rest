//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';

import axios from 'axios'; // new

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

class App extends Component {
  state = {
    todos: []
  };

  // new
  componentDidMount() {
    this.getTodos();
  };

  // new
  getTodos() {
  axios
  .get('http://127.0.0.1:8000/api/')
  .then(res => {
  this.setState({ todos: res.data });
  })
  .catch(err => {
  console.log(err);
  });
  }

  render() {
  return (<div>
    {this.state.todos.map(item => (
    <div key={item.id}>
    <h1>{item.title}</h1>
    <span>{item.body}</span>
    </div>
    ))}</div>);
  }
}


export default App;
