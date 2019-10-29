import React, {useState, useEffect} from 'react';
import './App.css';

function ShowCount(props) {
  return props.count;
}

function App() {

  //Syntax for getter and setter methods
  const [count, setCount] = useState(0);
  const counter = <ShowCount count={10}/>;

  useEffect(() => {
    document.getElementById("counter").innerHTML = `You clicked ${counter} times`;
  });

  return (
    <div className="App">
      <h1 id='counter'></h1>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
      <button onClick={() => setCount(count-1)}>
        Click me :)
      </button>
    </div>
  );
}

export default App;
