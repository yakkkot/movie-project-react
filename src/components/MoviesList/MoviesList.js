import React from 'react';

import {useSelector} from "react-redux";

import {MoviesListCard, MyPagination,Spinner} from "../index";
import {styles} from "../../configs";


const MoviesList = ({change, currentPage,maxPage}) => {

    const {movies,loading} = useSelector(state => state.movies);

    return (
        <>
            {!loading ?
                <div className={`${styles.wrap} pt-[80px]`}>
                    <div className={`${styles.container} flex-col`}>
                        <div className="w-full px-2 py-2 my-2">
                            <div className="grid grid-cols-5 gap-3 items-center">
                                {
                                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                                }
                            </div>
                        </div>
                    </div>
                    <MyPagination maxPage={maxPage} change={change} currentPage={currentPage}/>
                </div>
                : <Spinner/>
            }
        </>
    );
};

export {MoviesList};

