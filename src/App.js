import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person /> 
        <Person /> 
        <Person /> 
      </div>
    );
  }

  // return React.createElement('div', null, 'h1','Hi, I\'m a React App!!!!'); //it does not work because <h1> is not created properly
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));// can use it but it will be more complex and confusing
}


export default App;
