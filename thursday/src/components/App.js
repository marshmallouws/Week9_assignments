import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";
import { RSA_NO_PADDING, ENGINE_METHOD_DIGESTS } from "constants";


function App({apiFacade}) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    apiFacade.getPersons()
      .then(data => {
        setPersons(data);
      })
  },[setPersons]);

  const storeAddEditPerson = (person) => {
    document.getElementById("addedit").innerText = "Add Persons";
    var newList = [...persons];
    if(person.id === "") {
      newList.push(person);
    } else {
      var pup = persons.find(p => p.id === person.id);
      pup.name = person.name;
      pup.age = person.age;
      pup.email = person.email;
      pup.gender = person.gender;
    }

    setPersons(newList);
    apiFacade.addEditPerson(person);
  }

  const deletePerson = (id) => {
    console.log(id);
    const newList = persons.filter(p => p.id !== id);
    setPersons(newList);
    apiFacade.deletePerson(id);
  }

  const editPerson = (person) => {
    document.getElementById("addedit").innerText = "Edit person";

    console.log(person);
    setPersonToAddEdit({...person})

    /*const edit = {...emptyPerson};
    edit.id = person.id;
    edit.name = person.name;
    edit.age = person.age;
    edit.email = person.email;
    edit.gender = person.gender; */

    //storeAddEditPerson(edit);
  }


  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 id="addedit" style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
