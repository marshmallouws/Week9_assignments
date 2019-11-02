import React, { useState } from "react";


export default function AddEditPerson(props) {
  const { addEditPerson, edit, newPerson } = props;
  const [person, setPerson] = useState({ ...props.newPerson });



  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */
  const handleChange = (evt) => {
    const val = evt.target.value;
    const ch = evt.target.id;
    person[ch] = val;
    setPerson({...person}) 
    
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();

    person.name = document.getElementById("name").value;
    person.age = document.getElementById("age").value;
    person.email = document.getElementById("email").value;
    person.gender = document.getElementById("gender").value;
    console.log(person.email);
    setPerson(person);
    addEditPerson(person);
  }

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input className="form-control" readOnly id="id" value={person.id} />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              onChange={handleChange}
              className="form-control"
              value={person.name}
              id="name"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              onChange={handleChange}
              type="number"
              value={person.age}
              className="form-control"
              id="age"
              placeholder="Enter age"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              onChange={handleChange}
              value={person.email}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              onChange={handleChange}
              value={person.gender}
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
