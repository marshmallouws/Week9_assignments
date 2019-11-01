import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NameList from "./NameList"
import NewName from "./NewName"
import uuid from "uuid/v1";

function App() {
    const initialData = [
        { id: uuid(), name: "Peter" },
        { id: uuid(), name: "Annika" },
        { id: uuid(), name: "Mads" }
    ]
    const [nameList, setNames] = useState(initialData);
    const [newName, setNewName] = useState({ id: "", name: "" });

    const addName = nameObj => {
        if (nameObj.id === "") { // id=-1 Indicates a new object
            nameObj.id = uuid();
            nameList.push(nameObj);
        } else {//if id != "", it's an existing todo. Find it and add changes
            //let nameEdit = names.find(t => t.id === nameObj.id);
            //nameEdit.todoText = nameObj.todoText;
        }
        setNames([...nameList]);
        setNewName({ id: "", name: "" })
    };

    return (
        <div className="container outer">
            <div className="row">
                <div className="col-6 allTodos">
                    <NameList nameList={nameList} />
                </div>
                <div className="col-5 new-todo">
                    <NewName
                        addName={addName}
                        nextName={newName}
                        setNewName={setNewName}
                    />
                </div>
                
            </div>
            
        </div>
    );
}
export default App;