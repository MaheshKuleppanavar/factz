import { useState } from "react";
import './Facts.css';

export default function Facts(){

    const [facts,setFacts]=useState([]);

    const getFacts = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/facts');
        const data = await response.json();   
        setFacts(data);
    } 
    catch (err) {
        console.log(err);
    }
}
  return (
    <>
    <div className="container">
        <h1>Factz App</h1>
        <button onClick={getFacts}>Load Facts</button>
        <div className="facts-grid">

            {facts.map(fact => (
            <div className="fact-card" key={fact.id}>
                <h3>Fact #{fact.id}</h3>
                <p>{fact.fact}</p>
            </div>
            ))}

        </div>
    </div>
    </>
  );
}