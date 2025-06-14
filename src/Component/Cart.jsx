import React from 'react';
import {useContext} from "react";
import {movieContext} from "../context/index.js";
import {getMovieCover} from "../Data/Data.js";
import deleteIcon from '../assets/delete.svg'; // Assuming you have a delete icon
import checkoutIcon from '../assets/icons/checkout.svg';
import EmptyMessage from "./EmptyMessage.jsx"; // Assuming you have a checkout icon

const Cart = ({onClick}) => {
    const {movies, setMovies} = useContext(movieContext);
    const handleRemoveFromCart = (movieId) => {
        const updatedMovies = movies.filter(movie => movie.id !== movieId);
        setMovies(updatedMovies);
    }
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
        >
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto"
            >
                <div
                    className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9"
                >
                    <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">Your Carts</h2>
                    <div
                        className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
                        {
                            movies.length > 0 ? (
                                movies.map((movie)=>(
                                    <div key={movie.id} className="grid grid-cols-[1fr_auto] gap-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                className="rounded overflow-hidden w-[80px] h-[120px] md:w-[100px] md:h-[150px]"
                                                src={getMovieCover(movie.cover)}
                                                alt=""
                                            />
                                            <div>
                                                <h3 className="text-base md:text-xl font-bold">{movie.title}</h3>
                                                <p className="max-md:text-xs text-[#575A6E]">
                                                    {movie.genre}
                                                </p>
                                                <span className="max-md:text-xs">${movie.price}</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between gap-4 items-center">
                                            <button
                                                className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white" onClick={(e) => {
                                                handleRemoveFromCart(movie.id)}
                                            }
                                            >
                                                <img className="w-5 h-5" src={deleteIcon || ""} alt="./assets/delete.svg"/>
                                                <span className="max-md:hidden">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <EmptyMessage/>
                            )
                        }
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <a
                            className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                            href="#"
                        >
                            <img src={checkoutIcon || ""} width="24" height="24" alt="./assets/icons/checkout.svg"/>
                            <span>Checkout</span>
                        </a>
                        <a
                            className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                            href="#" onClick={onClick}
                        >
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
