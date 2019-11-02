import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewName(props) {

  const [newName, setNewName] = useState(props.nextName);

  const saveName = evt => {
    if (newName.name === "") {
      return;
    }
    props.addName(newName);
    evt.preventDefault();
  };

  useEffect(() => setNewName({ ...props.nextName }), [props.nextName]);

  const onChange = evt => {
    const val = evt.target.value;
    newName.name = val;
    setNewName({ ...newName });
  };
  const title = newName.id === "" ? "Create new Todo" : "Edit Todo"
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={newName.name} onChange={onChange} />
        <br /><br />
        <button onClick={saveName} className="btn btn-info">Save</button>
      </form>
      {newName.id !== "" && <p>Editing todo with</p>}
    </div>
  );
}
export default NewName;

NewName.propTypes = {
  nextTodo: PropTypes.object,
  addTodo: PropTypes.func
}