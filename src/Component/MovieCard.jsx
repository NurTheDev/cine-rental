import React, {useState} from 'react';
import {getMovieCover} from "../Data/Data.js";
import Rating from "./Rating.jsx";
import MovieModal from "./MovieModal.jsx";
import {useContext} from "react";
import {movieContext} from "../context/index.js";
import {Bounce, toast} from "react-toastify";

const MovieCard = ({movie }) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null);
    const {state, dispatch} = useContext(movieContext);
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
        const existingMovie = state.cartItems.find(m=> m.id === movie.id);
        if( existingMovie) {
            toast.error(`${movie.title} is already added to cart`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }
        else {
            dispatch(
                {
                    type : 'CART_ADD_ITEM',
                    payload: {
                        ...movie,
                    }
                }
            )
            toast.success(`${movie.title} added to cart successfully`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    };
    return (
        <>
            {showModal && <MovieModal movie={selectedMovie} onClose={handleCloseModal} onAddToCart={handleAddToCart}/>}
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
