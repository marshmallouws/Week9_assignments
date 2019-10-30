import React, {useState, useEffect} from 'react';
import './App.css';
/*
var chuckJoke = "";
var dadJoke = "";

function FetchChuckJoke() {

    const category = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];
    const cat = Math.floor(Math.random() * category.length);
    let url = "https://api.chucknorris.io/jokes/random";
    fetch("https://api.chucknorris.io/jokes/random")
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
} */

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