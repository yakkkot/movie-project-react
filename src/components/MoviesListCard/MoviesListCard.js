import React from 'react';

import {useNavigate} from "react-router-dom";
import {GenreBadge, PosterPreview, StarsRating} from "../index";

const MoviesListCard = ({movie}) => {

    const {id,genre_ids,title,vote_average} = movie;

    const navigate = useNavigate()

    const anotherMovie = (id) => {
        navigate(`/movie/${id}`);
        window.scrollTo(0, 0);
    };


    return (
                <div onClick={() => anotherMovie(id)}
                     className="relative hover:scale-105 cursor-pointer transition duration-500 py-1 movie_card">
                    <GenreBadge genre_ids={genre_ids}/>
                    <PosterPreview movie={movie}/>
                    <div className={"show_info px-2 rounded-b-xl py-1 "}>
                        <p className='font-bold'>{title}</p>
                        <StarsRating key={id} vote_average={vote_average}/>
                    </div>
                </div>

    );
};

export {MoviesListCard};

