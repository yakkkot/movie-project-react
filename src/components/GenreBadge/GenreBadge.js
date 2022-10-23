import React from 'react';

import CornerRibbon from "react-corner-ribbon";
import {useSelector} from "react-redux";

const GenreBadge = ({genre_ids}) => {

    const {genres} = useSelector(state => state.movies)

    const genreMovie = genres.find(value=> value.id===genre_ids[0])

    return (
        <CornerRibbon
            position="top-right"
            fontColor="#f0f0f0"
            backgroundColor="#600F0F"
            containerStyle={{}}
            style={{}}
            className=""
        >
            {genreMovie?.name}
        </CornerRibbon>
    );
};

export {GenreBadge};