import { useState } from "react"

import './styles.css';



type Movie = {
    titulo: string;
    avatar: string;
}

export function GetApiData() {
    const [movies, setMovies] = useState<Movie[]>([]);

    function handleGetMoviesData() {
        fetch('https://api.b7web.com.br/cinema/')
            .then((response) => response.json())
            .then((json) => setMovies(json));
    }

    return (
        <div className="movies">
            <button onClick={handleGetMoviesData}>Get Movies</button>
            <div>Total movies: {movies.length}</div>
            <div className="movies-grid">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-grid-item">
                        <img src={movie.avatar} alt="movie avatar" />
                        <p>{movie.titulo}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}