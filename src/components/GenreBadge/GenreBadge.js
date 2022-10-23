import React from 'react';

import CornerRibbon from "react-corner-ribbon";
import {useSelector} from "react-redux";

const GenreBadge = ({genre_ids}) => {

    const {genres} = useSelector(state => state.movies)

    const genreMovie = genres.find(value=> value.id===genre_ids[0])

    return (
        <CornerRibbon
            position="top-right" // OPTIONAL, default as "top-right"
            fontColor="#f0f0f0" // OPTIONAL, default as "#f0f0f0"
            backgroundColor="#600F0F" // OPTIONAL, default as "#2c7"
            containerStyle={{}} // OPTIONAL, style of the ribbon
            style={{}} // OPTIONAL, style of ribbon content
            className="" // OPTIONAL, css class of ribbon
        >
            {genreMovie?.name}
        </CornerRibbon>
    );
};

export {GenreBadge};