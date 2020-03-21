import React, {Component} from 'react';
import classes from './App.module.css'; 
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// container component(app.js) Are often stateful, as they tend to serve as data sources.
//Are concerned with how things work.
//May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.

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
   const persons = [...this.state.persons]; //
    persons.splice(personIndex, 1);         // splice(arg, 1): Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. 1: remove 1 element from the array
    this.setState({persons: persons})
    
  }

  render() {
    let persons = null;
    
    if(this.state.showPersons){
      persons = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonsHandler}
            changed = {this.nameChangeHandler}/>; 
    }
    
    //let classes =['red', 'bold'].join(' ');//join 2 classes into a class  "red bold" valid css class list
    return (
      <div className={classes.App}>
        <Cockpit 
        title ={this.props.appTitle}
        showPersons={this.state.showPersons} 
        persons ={this.state.persons} 
        clicked ={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
  //dont add switchNameHandler() because it will execute immediately when react render this to the DOM

  
}


export default App;
