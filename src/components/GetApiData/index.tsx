import { useState } from "react"

import './styles.css';


export function GetApiData() {
    const [movies, setMovies] = useState([]);

    function handleGetMoviesData() {
        fetch('https://api.b7web.com.br/cinema/')
            .then((response) => response.json())
            .then((json) => setMovies(json));
    }

    return (
        <div>
            <button onClick={handleGetMoviesData}>Get Movies</button>
            <div>Total movies: {movies.length}</div>
        </div>
    )
}