import React from "react"
import PropTypes from 'prop-types';

export default function AllPersons(props) {
  const { persons,editPerson,deletePerson} = props;
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
          {persons.map(p => {
            "<td>" + p.age + "</td><td>" + p.name + "</td><td>" + p.gender + "</td><td>" + p.email + "</td>";
          })}
          <td>{persons.age}</td><td>{persons.name}</td>
        </tbody>
      </table>
      
      <p>Please make me show all persons in the table above</p>
      <p>Also, update me when new items are added/edited </p>
      
    </div>
  )
}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}
