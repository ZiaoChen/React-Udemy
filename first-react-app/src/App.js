import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I am a React App </h1>
        <Person name="Ziao" age="28">This is shit</Person>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,"Hi, I am a React App"))
  }
}

export default App;
