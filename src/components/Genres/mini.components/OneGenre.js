import React from 'react';

import {styles} from "../../../configs";
import {Link} from "react-router-dom";

const OneGenre = ({genre}) => {
    return (
        <Link to={`/genre/${genre.id}/${genre.name}`}>
            <div key={genre.id} className={`${styles.flex_center} ${styles.button} shadow_none`}>
                {genre.name}
            </div>
        </Link>
    );
};

export {OneGenre};