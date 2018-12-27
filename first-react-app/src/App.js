import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name:'Ziao', age: 28},
      { name:'Chen', age:34}
    ]
  }

  switchNameHandler = (newName) => {
    // Don't do this this.state.persons[0].name = "Chen Ziao";
    this.setState({
      persons: [
        { name: newName, age: 55},
        { name:'Chen', age:77}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 55},
        { name:'Chen', age:77}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I am a React App </h1>
        <button onClick={() => this.switchNameHandler("Tracy")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Li Jiahui')}
          changed={this.nameChangedHandler}>This is shit</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>This is shit</Person>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,"Hi, I am a React App"))
  }
}

export default App;
