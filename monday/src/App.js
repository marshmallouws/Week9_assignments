import React from 'react';
import './App.css';
import upper, {text1, text2, text3} from "./File1";
import {firstName, email} from "./App2";

function App() {
  return (
    <div className="App">
      <h1>
        Testing
      </h1>
      <p>
        {text1}
      </p>
      <p>
        {text2}
      </p>
      <p>
        {text3}
      </p>
      <p>
        {upper("soemthign")}
      </p>
      <p>
        {email} {firstName}
      </p>
    </div>
  );
}



export default App;
