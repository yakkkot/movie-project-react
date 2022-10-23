import React from 'react';

import {NavLink} from "react-router-dom";
import {BsCameraReels} from "react-icons/bs";

const Logo = ({onClick}) => {
    return (
        <NavLink to={'/home'}
                 onClick={onClick}>
            <div className="flex items-center gap-[15px] text-3xl cursor-pointer">
                <BsCameraReels className="text-red-700"/>
                <h1>Movie House</h1>
            </div>
        </NavLink>
    );
};

export {Logo};