import React from "react"
import PropTypes from 'prop-types';

export default function AllPersons(props) {
  const {persons,editPerson,deletePerson} = props;
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th><th></th></tr>
        </thead>
        <tbody>
            {persons.map(person => (
              <tr key={person.id}><td>{person.age}</td>
                                <td>{person.name}</td>
                                <td>{person.gender}</td>
                                <td>{person.email}</td>
                                <td>
                                  <a href="#" onClick={(e) => {e.preventDefault(); deletePerson(person.id)}}>(delete,</a>
                                  <a href="#" onClick={(e) => {e.preventDefault(); editPerson(person);}}>edit)</a>
                                </td></tr>
            ))}
        </tbody>
      </table>
      
    </div>
  )
}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}