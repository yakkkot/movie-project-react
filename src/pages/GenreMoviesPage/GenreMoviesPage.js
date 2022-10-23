import React, {useEffect} from 'react';

import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesWithGenre} from "../../redux";
import {Error, MoviesList} from "../../components";


const GenreMoviesPage = () => {

    const dispatch = useDispatch();
    const {genres,movies,maxPage,errors} = useSelector(state => state.movies);

    const {value: genre} = useParams();
    const [page, setPage] = useSearchParams();

    console.log(errors)
    const need = genres.find(value => value.name.toLowerCase() === genre.toLowerCase());

    console.log(movies);
    const change = (num)=>{
        setPage({page: `${num}`})
    }

    const current = +page.get('page') || 1;
    {/*    // <div className={`${styles.wrap} pt-[80px]`}>*/}
    {/*    //     <div className={`${styles.container} flex-col`}>*/}
    {/*    //         <div className="w-full px-2 py-2 my-2">*/}
    {/*    //             <div className="grid grid-cols-5 gap-2 items-center">*/}
    {/*    //                 {*/}
    {/*    //                     movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)*/}
    {/*    //                 }*/}
    {/*    //             </div>*/}
    {/*    //         </div>*/}
    {/*    //     </div>*/}
    {/*    //*/}
    {/*    //     <MyPagination maxPage={maxPage} change={change} currentPage={current}/>*/}
    {/*    // </div>*/}
    useEffect(() => {
        dispatch(getMoviesWithGenre({id:need?.id,page:page.get('page')}))
        window.scrollTo(0, 0);
    }, [genre,page,need]);

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