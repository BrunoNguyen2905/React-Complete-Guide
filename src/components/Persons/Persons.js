import React, { PureComponent } from 'react';


import Person from './Person/Person';


class Persons extends PureComponent {
      // static getDerivedStateFromProps(props, state){
      //       console.log('[Persons.js] getDerivedStateFromProps');
      //       return state;
      // }

      //PURECOMPONENT EUQALS SHOULDCOMPONENTUPDATE WITH A COMPLETE PROPS CHECK ==> MORE CONVINIENT

      // shouldComponentUpdate(nextProps, nextState){
      //       console.log('[Persons.js] shouldComponentUpdate');
      //       if(
      //             nextProps.persons !== this.props.persons || 
      //             nextProps.changed !== this.props.changed || 
      //             nextProps.clicked !== this.props.clicked){
      //                   return true; 
      //       }
      //       else {
      //             return false; //prevent rendering(does not need to rerender) again in Persons if nothing changes. If something changes, persons.js rendering then person.js rendering
      //       } 
      // }

      getSnapshotBeforeUpdate(prevProps, prevState){
            console.log('[Persons.js] getSnapshotBeforeUpdate');
            return {message: 'Snapshot!!'};
      }

      componentDidUpdate(prevProps, prevState, snapshot){
            console.log('[Persons.js] ComponentDidUpdate');
            console.log(snapshot);
      }

      componentWillUnmount(){
            console.log('[Persons.js] componentWillUnmount' ); //use for cleanup work
      }

      render() {
            console.log('[Persons.js] rendering...');
            return this.props.persons.map((person, index) => { //3 props : persons(array we will loop through), clicked, changed

                  return (
                        <Person
                              click={() => this.props.clicked(index)}
                              name={person.name}
                              age={person.age}
                              key={person.id}
                              changed={(event) => this.props.changed(event, person.id)}
                              isAuth={this.props.isAuthenticated} />
                  );
            });
      };
}

      export default Persons;
