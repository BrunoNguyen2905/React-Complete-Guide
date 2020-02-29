import React from 'react';
import './Person.css';

// A component is just a function which returns some JSX, some HTML
// const person = () => {
//     return <p>I'm a Person and I am {Math.floor(Math.random()*30)} years old!!</p>
// };

// children property(which is a reserved word)(cannot pass anything as children) prefers to any 
// elements include plain text which have opening and closing tag of that component

// pass a method as a reference to a property in App.js , and now we can use click property in Person.js

//onChange: change immediately when sth changes
const person = (props) => {
    return (
        <div className="Person">
        <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old!!</p>
        <p>{props.children}</p>   
        <input type="text" onChange={props.changed} value =  {props.name} /> 
        </div>
    ) 
};
export default person;