import React from 'react';
import upper, {names} from './File2';
import PropTypes from 'prop-types';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
    return <h1>Hello, {props.person.firstName} {props.person.lastName} {props.person.email}</h1>;
}

  
function App3() {
    return (
     <div>
       <Welcome name="Sara" />
       <Welcome name="Cahal" />
       <Welcome name="Edite" />
       <Welcome name={45}/>
       {names.map((name)=><WelcomePerson person = {name}/>)}
    </div>
   );
}

Welcome.propTypes = {
    name: PropTypes.string
  };

WelcomePerson.propTypes = {
    person: PropTypes.object,
    person: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      }),   
}
  
export default App3;
