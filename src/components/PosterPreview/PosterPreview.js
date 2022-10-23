import React from 'react';

const PosterPreview = ({movie,css}) => {

    return (
        <>
            {movie.poster_path ?
                <div className={`${css}`}>
                    <img className="rounded-xl"
                         src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
                         alt={`${movie.title}`}/>
                </div>
                : <div
                    className="bg-[#0E0E0F] text-red-50 h-full rounded-xl flex items-center justify-center text-2xl text-center">{movie.title}</div>
            }
        </>
    );
};

export {PosterPreview};