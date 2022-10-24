import React from 'react';

import {VideoTrailer, InformationMovie} from "./index";
import {useSelector} from "react-redux";
import {SliderMovie,Spinner} from "../index";


const MovieInfo = () => {

    const {similarMovies,loading} = useSelector(state => state.movies);

    return (
        <>
            {!loading ?
                <div className="flex flex-col items-center">
                    <InformationMovie/>
                    {similarMovies.length!==0 &&
                        <SliderMovie movies={similarMovies} header={'Similar Movies'} seconds={2500} sliders={6} loading={loading}/>}
                    <VideoTrailer/>
                </div>
                : <Spinner/>
            }

        </>
    );
};

export {MovieInfo};
