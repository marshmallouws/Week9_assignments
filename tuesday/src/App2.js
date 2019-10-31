import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const[chuck, setChuck] = useState("");
    const[dad, setDad] = useState("");
    const[getNorris, setNorris] = useState(false);

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => {
            setChuck(data.value);
        });
    },[getNorris]) //This effect is only run when there's a change to getNorris

    
    useEffect(() => {   
        const clear = setInterval(()=> {
            fetch("https://icanhazdadjoke.com/", {headers: {"Accept": "Application/json"}})
            .then(res => res.json())
            .then(data => {
                setDad(data.joke);
            });            
        }, 10000)
    
        return() => {
          clearInterval(clear)
        }
      });

    return (
        <div className="App">
            <button onClick={() => setNorris(!getNorris)}>Chuck Norris joke</button>
            <p>{chuck}</p>
            <p>{dad}</p>
        </div>
    )
}

export default App;