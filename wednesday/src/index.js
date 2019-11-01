import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormDemo from './FormDemo';
import FormDemoMultiple from './FormDemoMultiple';
import App from './App';
import App1 from './App1';

let app = <App1/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="form1">FormDemo</a> &nbsp;
         <a href="/"  className="x" id="form2">FormDemoMultiple</a> &nbsp;
         <a href="/"  className="x" id="app">Todo List</a> &nbsp;
         <a href="/"  className="x" id="app1">Name List</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "form1": app = <FormDemo/>; break;
        case "form2": app = <FormDemoMultiple/>; break;
        case "app": app = <App/>; break;
        case "app1": app = <App1/>; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
