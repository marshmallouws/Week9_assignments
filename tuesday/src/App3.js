import React, { useState } from "react";
import './App.css';
 
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((n, i) => 
        <ListDemo key={i} value={n}/>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

function NumberTable(props) {
    const numbers = props.numbers;
    const tblItem = numbers.map((n, i) => 
        <TableDemo key={i} value={n}/>
    );
    return (
        <table><tbody>{tblItem}</tbody></table>
    );
}

function TableDemo(props) {
    return <tr><td>{props.value}</td></tr>
}

function ListDemo(props) {
    return <li>{props.value}</li>;
}
export default function App() {
    const [numbers] = useState([1, 2, 3, 4]);
    return (
        <div>
            <NumberList numbers={numbers}/>
            <NumberTable numbers={numbers}/>
        </div>
    );

}
