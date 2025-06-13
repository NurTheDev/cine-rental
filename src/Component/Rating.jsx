import React from 'react';
import star from "../assets/star.svg"
const Rating = ({rating}) => {
    const stars = Array(rating).fill(star)
    return (
        <>
            {stars.map((star, index) => (
                <img key={index} src={star} alt="" className={"w-4 h-4"}/>
            ))}</>
    );
};

export default Rating;
