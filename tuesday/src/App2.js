import React, {useState, useEffect} from 'react';
import './App.css';

var chuckJoke = "";
var dadJoke = "";
function FetchChuckJoke() {

    const category = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];
    const cat = Math.floor(Math.random() * category.length);
    let url = "https://api.chucknorris.io/jokes/random?category=" + category[cat];
    fetch(url)
        .then(res => res.json())
        .then(data => {
            chuckJoke = data.value;
        });
    return chuckJoke;
}

function FetchDadJoke() {
    let url = "https://icanhazdadjoke.com/";
    fetch(url, {headers: {"Accept": "Application/json"}})
        .then(res => res.json())
        .then(data => {
            dadJoke = data.joke;
        });
    return dadJoke;
}

function App() {
    const[chuck, setChuck] = useState("");
    const[dad, setDad] = useState("");


    useEffect(() => {   
        const clear = setInterval(()=> {
          setDad(FetchDadJoke());
        }, 10000)
    
        return() => {
          clearInterval(clear)
        }
      });

    return (
        <div className="App">
            <button onClick={() => setChuck(FetchChuckJoke())}>Chuck Norris joke</button>
            <p>{chuck}</p>
            <p>{dad}</p>
        </div>
    )
}

export default App;