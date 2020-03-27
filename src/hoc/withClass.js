//should change file to WithClass.js before applying method 1

// import React from 'react';
// // one of 2 ways of create higher order components
// const withClass = props =>(
//     <div className={props.classes}>{props.children}</div>
// );

// export default withClass;


//Alnternative way
//WithClass upcase with 'W' if we use it as a component. withClass with lower case "w" used to indicate normal function
import React from 'react';
// one of 2 ways of create higher order components
const withClass = (WrappedComponent, className) =>{
   return props => (
        <div className ={className}>
            <WrappedComponent {... props}/>
        </div>
   );
};

export default withClass;