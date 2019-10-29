import React, {useState, useEffect} from 'react';
import './App.css';

function SetStart(props) {
  
  //Syntax for getter and setter methods
  const [count, setCount] = useState(props.start);
  /*const counter = <ShowCount count={10}/>;

  useEffect(() => {
    document.getElementById("counter").innerHTML = `You clicked ${counter} times`;
  }); */

  return (
    <div className="App">
      <h1>You have pressed {count} times</h1>
      <button onClick={() => setCount(count + props.increment)}>
        Click me!
      </button>
      <button onClick={() => setCount(count - props.decrement)}>
        Click me :)
      </button>
    </div>
  );
}

function App() {
  <SetStart start={10} increment={1} decrement={1}/>
}

export default App;
