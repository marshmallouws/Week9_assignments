import React, {useState, useEffect} from 'react';
import './App.css';

function SetTime() {
  const[time, setTime] = useState(currentTime);
  const[runTime, setRunTime] = useState(true);

  useEffect(() => {
    if(runTime === false) {
      return
    }

    const clear = setInterval(()=> {
      setTime(currentTime);
    }, 1000)

    return() => {
      clearInterval(clear)
    }
  },[runTime])

  // Button doesn't work
  return (
    <div>
      <button onclick={()=>setRunTime(false)}> 
        Start time
      </button>
      <p>
        {time}
      </p>
    </div>
    
  )

}

function currentTime() {
  var now = new Date();
  return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

function SetStart(props) {
  
  var today = new Date();

  //Syntax for getter and setter methods
  const [count, setCount] = useState(props.start);

  //Saving to local storage
  useEffect(() => {
    localStorage.setItem("count", count);
  });

  var store = localStorage.getItem("count");

  return (
    
    <div className="App">
      <h1>
        You have pressed {store} times
      </h1>
      <button onClick={() => setCount(count + props.val)}>
        Click me!
      </button>
      <button onClick={() => setCount(count - props.val)}>
        Click me :)
      </button>
      <SetTime/>
    </div>
  );
}

function App() {
  return <SetStart start={10} val={10}/>
}

export default App;
