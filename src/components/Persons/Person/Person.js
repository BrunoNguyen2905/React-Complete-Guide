import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass'
// import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }  
    
    static contextType = AuthContext;
    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
   

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in !</p> }

                </AuthContext.Consumer> */}
                {this.context.authenticated ? ( //with the help from contextType ==> shorter,easier to remember
                    <p>Authenticated!</p>
                ) : (
                    <p>Please log in !</p>
                ) }

                
             {/* <Auxiliary>  SIMILAR with using Fragment but more convinient */}
                <p onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old!!
                </p>
                <p key="i2">{this.props.children}</p>
                <input
                key="i3" 
                // ref={ (inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
             {/* </Auxiliary> */}
            </Fragment>
        );
    }
}

Person.propTypes= {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);