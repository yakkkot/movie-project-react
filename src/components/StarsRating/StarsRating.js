import React from 'react';

import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const StarsRating = ({vote_average}) => {
    return (
        <div className="flex items-center gap-1">
            <Rating
                emptySymbol={<AiOutlineStar/>}
                fullSymbol={<AiFillStar/>}
                initialRating={vote_average}
                stop={10}
                step={2}
            />
            <p className="inline pb-1">
                {vote_average.toFixed(1)}
            </p>

        </div>
    );
};

export {StarsRating};