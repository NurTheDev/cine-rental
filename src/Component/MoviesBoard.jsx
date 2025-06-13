import React, {useState} from 'react';
import MovieCard from "./MovieCard.jsx";
import {getMovies} from "../Data/Data.js";
import MovieModal from "./MovieModal.jsx";
const MoviesBoard = () => {
    const movies = getMovies();
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoviesBoard;

