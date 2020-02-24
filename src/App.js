import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state =  {
    persons: [
      { name:'Nhan', age:'19'  },
      { name:'Quan', age:'21'  },
      { name:'Khoa', age:'24'  }
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
  
  nameChangeHandler= (event) =>{
    this.setState({ //.bind(this) will control what this in this method setState 
      persons: [
        { name:'Nhan', age:'19'  },
        { name: event.target.value, age:'22'  }, //dymamically update something + onChange in Person.js
        { name:'Khoa', age:'24'  }
      ] 
    });

  }
  //<button onClick={this.switchNameHandler('Nhan Handsome')}>Switch Name</button> is replaced by this.togglePersonHandler
  //togglePersonsHandler (){} function call will have problem if we want to use this keyword

  togglePersonsHandler = () =>{ //this function + tertiary condition in button to toggle person components
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;
    
    if(this.state.showPersons){
      persons = (
        <div>
            <Person 
            name={this.state.persons[0].name} 
            age ={this.state.persons[0].age}/> 
            <Person 
            name={this.state.persons[1].name} 
            age ={this.state.persons[1].age}
            click= {this.switchNameHandler.bind(this, 'Nhan!!!!')}
            changed ={this.nameChangeHandler}> My Hobbies: Soccer</Person> 
            <Person 
            name={this.state.persons[2].name} 
            age ={this.state.persons[2].age}/> 
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
         style ={style}
         onClick={this.togglePersonsHandler}>Toogle Persons</button>  
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
