import React from 'react';

import {styles} from "../../../configs";
import {Link} from "react-router-dom";

const OneGenre = ({genre}) => {
    return (
        <Link to={`/genre/${genre.name}`}>
            <div key={genre.id} className={`${styles.flex_center}  cursor-pointer border-2 rounded-3xl border-white`}>
                {genre.name}
            </div>
        </Link>
    );
};

export {OneGenre};