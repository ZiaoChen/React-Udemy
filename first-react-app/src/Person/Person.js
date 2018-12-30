import React from 'react';
import './Person.css';

export const Person = (props) => {
  return (
    <div>
        <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export const UserInput = (props) => {
  return(
    <div>
        <input type="text" onChange={props.changed} value={props.username}/>
    </div>
  )
}

export const UserOutput = (props) => {
  return(
    <div>
        <p>{props.username}</p>

    </div>
  )
}
