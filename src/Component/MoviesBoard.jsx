import React, {useState} from 'react';
import MovieCard from "./MovieCard.jsx";
import {getMovies} from "../Data/Data.js";
import MovieModal from "./MovieModal.jsx";
const MoviesBoard = () => {
    const movies = getMovies();
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null);
    const handleModalClick = ()=>{
        setShowModal(!showModal)
    }
    return (
        <div className="content">
            {showModal && <MovieModal movie={selectedMovie} setShowModal={handleModalClick}/>}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} setShowModal={handleModalClick} setSelectedMovie={setSelectedMovie}/>
                ))}
            </div>
        </div>
    );
};

export default MoviesBoard;

