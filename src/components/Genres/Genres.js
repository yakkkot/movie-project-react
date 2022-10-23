import React from 'react';

import {useSelector} from "react-redux";

import {styles} from "../../configs";
import {OneGenre} from "./mini.components/OneGenre";

const Genres = ({switcher}) => {

    const {genres} = useSelector(state => state.movies);

    return (
        <>
            <div
                className={`${styles.container} dropdown-content py-3 px-3`}>
                <div className="text-[14px] grid grid-cols-3 gap-[7px]">
                    {genres.map(genre => <OneGenre key={genre.id} genre={genre}/>)}
                </div>
            </div>

        </>
    );
};


export {Genres};