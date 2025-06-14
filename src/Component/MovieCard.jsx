import React, {useState} from 'react';
import {getMovieCover} from "../Data/Data.js";
import Rating from "./Rating.jsx";
import MovieModal from "./MovieModal.jsx";
import {useContext} from "react";
import {movieContext} from "../context/index.js";

const MovieCard = ({movie }) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null);
    const {movies, setMovies} = useContext(movieContext);
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMovie(null);
    };
    const handleMovieClick = () => {
        setSelectedMovie(movie);
        setShowModal(true);
    };
    const handleAddToCart = (e, movie) => {
        e.stopPropagation();
        const existingMovie = movies.find(m=> m.id === movie.id);
        if( existingMovie) {
            alert("This movie is already in your cart.");
            return;
        }
        else {
            setMovies([...movies, movie]);
        }
    };
    return (
        <>
            {showModal && <MovieModal movie={selectedMovie} onClose={handleCloseModal}/>}
        <figure onClick={()=> handleMovieClick()}  className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img  className="w-full object-cover cursor-pointer" src={getMovieCover(movie.cover)} alt=""/>
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                <div className="flex items-center space-x-1 mb-5">
                    <Rating rating={movie.rating}/>
                </div>
                <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                   href="#" onClick={(e)=> handleAddToCart(e, movie)}>
                    <img src="./assets/tag.svg" alt=""/>
                    <span>${movie.price } | Add to Cart</span>
                </a>
            </figcaption>
        </figure>
</>
    );
};
export default MovieCard;
