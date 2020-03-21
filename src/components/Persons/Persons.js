import React from 'react';

import Person from './Person/Person';


 const persons = (props) =>props.persons.map((person, index) => { //3 props : persons(array we will loop through), clicked, changed
        return <Person
            click = {() => props.clicked(index)} 
            name = {person.name} 
            age={person.age} 
            key= {person.id} 
            changed ={(event) => props.changed(event, person.id)} />
      }

);

export default persons;
   