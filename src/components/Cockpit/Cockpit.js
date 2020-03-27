import React, {useEffect, useRef, useContext} from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';


// functional components dont manage state(presentational components/ stateless (can manage state by hook))
//Are concerned with how things look.
//May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
//Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
//Examples: Page, Sidebar, Story, UserInfo, List.

const cockpit = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const toggleBtnRef = useRef(null); //Refs with React Hooks in functional components
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const authContext = useContext(AuthContext);
  
  console.log(authContext.authenticated);


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => { //useEffect runs after jsx code has been rendering for the first time
    console.log('[Cockpit.js] useEffect');
    //http request...
    // const timer = setTimeout( () =>{
    //   alert('Saved data to cloud');
    // } ,1000);
    toggleBtnRef.current.click();// instanly click 'Toggle Persons' button after reloading the page
    return () =>{ //to be precise, it runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle!
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleaup work in useEffect');
    }
  }, []); //only show alert when changes occurs in props.persons . If only use [](pass an empty array), 
 //it tells React this effect has no dependency .it will run for the first time by default and never rerun again  


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect ( () => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () =>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = []; //const because never assign a new variable
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes =['red'] // 
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold'] // need join(' ') to join red and bold
  }

  if (props.personsLength <= 0) {
    assignedClasses.push(classes.italic); // classes = ['red', 'bold', 'italic'] // need join(' ') to join red and bold
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toogle Persons
        </button>
        
        <button onClick={authContext.login}>Log in</button>}
          
    </div>
  );
};

export default React.memo(cockpit); //prevent rendering(does not need to rerender) again in cockpit if nothing changes or triggers or need to update
 //If something changes, cockpit.js will render
//change in React.demo() and personsLength