import React from 'react';

import classes from './Cockpit.module.css';

// functional components dont manage state(presentational components/ stateless (can manage state by hook))
//Are concerned with how things look.
//May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
//Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
//Examples: Page, Sidebar, Story, UserInfo, List.

const cockpit = (props) => {
    const assignedClasses = []; //const because never assign a new variable
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red); // classes =['red'] // 
    }
    if(props.persons.length <= 1){
      assignedClasses.push (classes.bold); // classes = ['red', 'bold'] // need join(' ') to join red and bold
    }

    if(props.persons.length <= 0){
      assignedClasses.push (classes.italic); // classes = ['red', 'bold', 'italic'] // need join(' ') to join red and bold
    }

    return (
        <div className ={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toogle Persons
            </button>  
        </div>
    );
};

export default cockpit;