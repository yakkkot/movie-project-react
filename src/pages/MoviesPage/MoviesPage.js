import React, {useEffect} from 'react';

import {Error, MoviesList} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {getMovies, getSearchMovie} from "../../redux";

const MoviesPage = () => {

    const [page, setPage] = useSearchParams({page: `1`});
    const [query, setQuery] = useSearchParams({page: `1`});

    const dispatch = useDispatch();
    const {errors,maxPage} = useSelector(state => state.movies);


    const current = !query.get('query') ? +page.get('page') : +query.get('page') || 1
    const change = (num) => {
        (!query.get('query'))
            ? setPage({page: `${num}`})
            :
            setQuery(value => ({query: value.get('query'), page: `${num}`}));
    };

    useEffect(() => {
        if (query.get('query')) {
            dispatch(getSearchMovie({query: query.get('query'), page: query.get('page')}));
        } else {
            dispatch(getMovies(page.get('page')));
        }
        window.scrollTo(0, 0);
    }, [page, query]);

    return (
        <>
            {!errors.allMovies ?
                <MoviesList change={change} currentPage={current} maxPage={maxPage}/>
                : <Error/>
            }
        </>
    );

};

export {MoviesPage};