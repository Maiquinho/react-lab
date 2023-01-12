import { useState } from "react";
import { Loading } from "../Loading";

import './styles.css';



type Movie = {
    titulo: string;
    avatar: string;
}

export function GetApiData() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);

    async function handleGetMoviesData() {
        setLoading(true);
        const response = await fetch('https://api.b7web.com.br/cinema/');
        const data = await response.json();
        setLoading(false);

        setMovies(data);
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) :
                (
                    <div className="movies">
                        <div className="movies-grid">
                            {movies.map((movie, index) => (
                                <div key={index} className="movie-grid-item">
                                    <img src={movie.avatar} alt="movie avatar" />
                                    <p>{movie.titulo}</p>
                                </div>
                            ))}
                        </div>

                        <button onClick={handleGetMoviesData} disabled={movies.length != 0 ? true : false}>Get Movies</button>
                        <div>Total movies: {movies.length}</div>
                    </div>
                )
            }
        </>
    )
}