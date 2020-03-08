import React from 'react';
import styled from 'styled-components';

// import './Person.css';

// A component is just a function which returns some JSX, some HTML
// const person = () => {
//     return <p>I'm a Person and I am {Math.floor(Math.random()*30)} years old!!</p>
// };

// children property(which is a reserved word)(cannot pass anything as children) prefers to any 
// elements include plain text which have opening and closing tag of that component

// pass a method as a reference to a property in App.js , and now we can use click property in Person.js

//onChange: change immediately when sth changes

const StyleDiv =  styled.div`
        width: 60%;
        margin:16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align:center;

        @media (min-width: 500px){
            width: 450px;
        }
`;



const person = (props) => {

    // const style ={
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
        //<div className="Person" style ={style}>
        <StyleDiv>
        <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old!!</p>
        <p>{props.children}</p>   
        <input type="text" onChange={props.changed} value =  {props.name} /> 
        </StyleDiv>
    ) 
};
export default person;