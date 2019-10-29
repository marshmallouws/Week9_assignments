import React from 'react';
import './App.css';
import upper, {males, females} from "./File2";

var person = upper;
const personV2 = {...upper};
personV2.phone = 1234;
personV2.friends = [...males, ...females];

export const {firstName, email} = person;

const res = [...males, ...females];
const res1 = [...males, firstName, "Helle", ...females, "Tina"];
console.log(personV2);
console.log(person);

console.log(res);
console.log(res1);

function App2() {
  return (
    <div className="App">
    <h1>
      Testing something more
    </h1>
    </div>
  );
}

export default App2;
