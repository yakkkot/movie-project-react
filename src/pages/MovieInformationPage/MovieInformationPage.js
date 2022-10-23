import React,{useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {Error, MovieInfo} from "../../components";

import {getAllInformationMovie, getCredits, getSimilarMovies, getTrailerVideo} from "../../redux";


const MovieInformationPage = () => {

    const dispatch = useDispatch();
    const {errors} = useSelector(state => state.movies);

    const {id} = useParams();

    useEffect(() => {
        dispatch(getAllInformationMovie(id));
        dispatch(getSimilarMovies(id));
        dispatch(getTrailerVideo(id));
        dispatch(getCredits(id));
    }, [id]);

    return (
        <>
            {!errors.movieInfo ?
                <MovieInfo/>
                : <Error/>
            }
        </>
    );
};

export {MovieInformationPage};