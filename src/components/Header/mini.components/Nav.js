import React from 'react';

import {NavLink} from "react-router-dom";
import {styles} from "../../../configs";
import {MdKeyboardArrowDown} from "react-icons/md";
import {Genres} from "../../Genres/Genres";

const Nav = () => {

    return (
        <div className="flex items-center gap-[30px] h-full">
            <NavLink to={'/home'}
                     className={({isActive}) => isActive ? 'border-b-2 border-b-red-600 text-red-600' : ''}>
                Home
            </NavLink>

            <div className={`dropdown`}>
                <div className={`py-1 ${styles.flex_center} gap-1 h-full cursor-pointer`}>
                    Genre
                    <MdKeyboardArrowDown size={30} className='text-red-50 text_shadow_all mark '/>
                </div>
                <Genres/>
            </div>
            <NavLink to={'/movies'}
                     className={({isActive}) => isActive ? 'border-b-2 border-b-red-600 text-red-600' : ''}>
                Movies
            </NavLink>

        </div>
    );
};


export {Nav};