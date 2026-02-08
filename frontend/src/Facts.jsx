import { useState } from "react";
import './Facts.css';

export default function Facts(){

    const [facts, setFacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getFacts = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch("https://factz-backend.onrender.com/api/facts");

            if (!res.ok) {
            throw new Error("Failed to fetch facts");
            }

            const data = await res.json();
            setFacts(data);
        } catch (err) {
            setError("Oops! Unable to load facts. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

  
  return (
    <>
    <div className="container">
        <h1>Factz App</h1>
        <button onClick={getFacts}>Load Facts</button>

        {loading && <p>Loading facts... ⏳</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && facts.length === 0 && (
        <p> No facts available right now.</p>
        )}

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