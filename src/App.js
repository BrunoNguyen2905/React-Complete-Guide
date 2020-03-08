import React, {Component} from 'react';
import styled from 'styled-components';
import './App.css';

import Person from './Person/Person.js';

const StyledButton= styled.button `
  background-color: ${props => props.alt ? 'red': 'green'}; /* alt in the button*/
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon': 'lightgreen'}; /* alt in the button*/
    color: black;

  }
`;


class App extends Component {
  state =  {
    persons: [
      { id: 'abc', name:'Nhan', age:'19'  },
      { id:'cde', name:'Quan', age:'21'  },
      { id:'efg', name:'Khoa', age:'24'  }
    ], 
    otherState: 'some other values',// this one is untouch because it is just overwritten by switchNameHandler method in name, age and otherState will not be discarded 
    showPersons: false //togglePersonHandler

  }
   switchNameHandler = (newName) => {
    //console.log("Was clicked");
    //this.setState.persons[0].name = 'Nhan Nguyen'; DONT DO THIS
    this.setState({ //.bind(this) will control what this in this method setState 
      persons: [
        { name:newName, age:'19'  },
        { name:'Quan', age:'22'  },
        { name:'Khoa', age:'24'  }
      ] 
    });
  }
  //<button onClick={() => this.switchNameHandler('Nhan Handsome')}>Switch Name</button> // use arrow function which take no arguments ,
  // line above implicitly add 'return' keyword in front of this.switchNameHandler() and return a function call
  //It can be convinient syntax but inefficient . Use .bind() instead
  
  nameChangeHandler= (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id ;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]); alternative

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    

    this.setState({ //.bind(this) will control what this in this method setState 
      persons: persons
      // persons: [
      //   { name:'Nhan', age:'19'  },
      //   { name: event.target.value, age:'22'  }, //dymamically update something + onChange in Person.js
      //   { name:'Khoa', age:'24'  }
      // ] 
    });

  }
  //<button onClick={this.switchNameHandler('Nhan Handsome')}>Switch Name</button> is replaced by this.togglePersonHandler
  //togglePersonsHandler (){} function call will have problem if we want to use this keyword


  togglePersonsHandler = () =>{ //this function + tertiary condition in button to toggle person components
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  };

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //slice() mean copy the full array and return the new one
   const persons = [... this.state.persons]; //
    persons.splice(personIndex, 1);         // splice(arg, 1): Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. 1: remove 1 element from the array
    this.setState({persons: persons})
    
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border:'1px solid blue',
    //   padding: '8px',
    //   cursor:'pointer'
    // };

    let persons = null;
    
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = {() => this.deletePersonsHandler(index)} 
              name = {person.name} 
              age={person.age} 
              key= {person.id} 
              changed ={(event) => this.nameChangeHandler(event, person.id)} />
          })}
            {/* <Person 
            name={this.state.persons[0].name} 
            age ={this.state.persons[0].age}/> 
            <Person 
            name={this.state.persons[1].name} 
            age ={this.state.persons[1].age}
            click= {this.switchNameHandler.bind(this, 'Nhan!!!!')}
            changed ={this.nameChangeHandler}> My Hobbies: Soccer</Person> 
            <Person 
            name={this.state.persons[2].name} 
            age ={this.state.persons[2].age}/>  */}
        </div> 
      );
      //style.backgroundColor ='red';
      //style[':hover'] = {
        //backgroundColor: 'salmon',
        //color: 'black'
      //};


    }
    
    //let classes =['red', 'bold'].join(' ');//join 2 classes into a class  "red bold" valid css class list
    const classes = []; //const because never assign a new variable
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes =['red'] // 
    }
    if(this.state.persons.length <= 1){
      classes.push ('bold'); // classes = ['red', 'bold'] // need join(' ') to join red and bold
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          alt= {this.state.showPersons}// depend on this.state.showPersons
          onClick={this.togglePersonsHandler}>Toogle Persons
        </StyledButton>  
        {persons}
      </div>
    );
  }

  //dont add switchNameHandler() because it will execute immediately when react render this to the DOM

  //state 
  //props

  // return (
  //   <div className="App">
  //     <h1>Hi, I'm a React App</h1>
  //     <p>This is really working!</p>
  //     <button>Switch Name</button>
  //     <Person name="Quan" age ="21" /> 
  //     <Person  name="Nhan" age ="19">My Hobbies: Soccer</Person> 
  //     <Person name ="Khoa" age="24"/> 
  //   </div>
  // );


  // return React.createElement('div', null, 'h1','Hi, I\'m a React App!!!!'); //it does not work because <h1> is not created properly
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));// can use it but it will be more complex and confusing

  // {
  //   this.state.showPersons === true ?
  //     <div>
  //         <Person 
  //         name={this.state.persons[0].name} 
  //         age ={this.state.persons[0].age}/> 
  //         <Person 
  //         name={this.state.persons[1].name} 
  //         age ={this.state.persons[1].age}
  //         click= {this.switchNameHandler.bind(this, 'Nhan!!!!')}
  //         changed ={this.nameChangeHandler}> My Hobbies: Soccer</Person> 
  //         <Person 
  //         name={this.state.persons[2].name} 
  //         age ={this.state.persons[2].age}/> 
  //     </div> : null
  // } NOT IDEAL and OPTIMIZED WAY It versy hard to keep track of which expression is reponsible for 
}


export default App;
