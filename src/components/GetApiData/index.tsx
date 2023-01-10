import { useState } from "react"

import './styles.css';



type Movie = {
    titulo: string;
    avatar: string;
}

export function GetApiData() {
    const [movies, setMovies] = useState<Movie[]>([]);

    async function handleGetMoviesData() {
        const response = await fetch('https://api.b7web.com.br/cinema/');
        const data = await response.json();
        
        setMovies(data);
    }

    return (
        <div className="movies">
            <div className="movies-grid">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-grid-item">
                        <img src={movie.avatar} alt="movie avatar" />
                        <p>{movie.titulo}</p>
                    </div>
                ))}
            </div>

            <button onClick={handleGetMoviesData}>Get Movies</button>
            <div>Total movies: {movies.length}</div>
        </div>
    )
}