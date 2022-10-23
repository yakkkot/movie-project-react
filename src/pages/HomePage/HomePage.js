import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {getGenres, getTopRatedMovie, getTrendingMovie} from "../../redux";

import {Error, TrendingMovie} from "../../components";

const HomePage = () => {

    const {errors} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrendingMovie());
        dispatch(getTopRatedMovie());
    }, [])

    return (

        <>
            {!errors.trendingMovie ?
                <TrendingMovie/>
                : <Error/>
            }
        </>
    );
};

export {HomePage};