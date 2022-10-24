import React, {useEffect} from 'react';

import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesWithGenre} from "../../redux";
import {Error, MoviesList} from "../../components";


const GenreMoviesPage = () => {

    const {id,value: genre} = useParams();
    const [page, setPage] = useSearchParams({page: `1`})

    const dispatch = useDispatch();
    const {maxPage, errors} = useSelector(state => state.movies);


    // const need = genres.find(value => value.name.toLowerCase() === genre.toLowerCase());

    const change = (num) => {
        setPage({page: `${num}`})
    }

    const current = +page.get('page') || 1;

    useEffect(() => {
        dispatch(getMoviesWithGenre({id: id, page: page.get('page')}))
        window.scrollTo(0, 0);
    }, [genre, page]);

    return (
        <>
            {!errors.genreMovies ?
                <MoviesList maxPage={maxPage} change={change} currentPage={current}/>
                : <Error/>
            }
        </>
    );
};

export {GenreMoviesPage};