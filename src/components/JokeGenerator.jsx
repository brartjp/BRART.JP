import React, { useState, useEffect } from 'react';
import './JokeGenerator.css';

const JokeGenerator = () => {
    const [joke, setJoke] = useState({});

    const fetchJoke = async () => {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const data = await response.json();
        setJoke(data);
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="joke-card">
            <h2>{joke.setup}</h2>
            <p>{joke.punchline}</p>
            <button onClick={fetchJoke}>Get New Joke</button>
        </div>
    );
};

export default JokeGenerator;