import React from 'react';


// A component is just a function which returns some JSX, some HTML
const person = () => {
    return <p>I'm a Person and I am {Math.floor(Math.random()*30)} years old!!</p>
};
    
export default person;