import React, { Component } from 'react';
import './App.css';
import {Person, UserInput, UserOutput} from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name:'Ziao', age: 28},
      { name:'Chen', age:34}
    ],
    assign_1:[
      {username:'Tracy'}
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

  usernameChangedHandler = (event) => {
    this.setState({
      assign_1:[
        {username: event.target.value}
      ]
    })
  }

  render() {

    // inline style
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, I am a React App </h1>
        <button
          style = {style}
          onClick={() => this.switchNameHandler("Tracy")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Li Jiahui')}
          changed={this.nameChangedHandler}>This is shit</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>This is shit</Person>
        <UserInput changed = {this.usernameChangedHandler}></UserInput>
        
        <UserOutput
          username={this.state.assign_1[0].username}></UserOutput>
        <UserOutput></UserOutput>

      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,"Hi, I am a React App"))
  }
}

export default App;
