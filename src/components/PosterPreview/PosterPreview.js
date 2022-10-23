import React from 'react';

const PosterPreview = ({movie,css}) => {
    return (

                <div className={`${css}`}>
                    <img className="rounded-xl"
                         src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
                         alt={`${movie.title}`}/>
                </div>

    );
};

export {PosterPreview};