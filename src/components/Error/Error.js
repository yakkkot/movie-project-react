import React from 'react';

import {styles} from "../../configs";
import {BiErrorCircle} from "react-icons/bi";

const Error = () => {

    return (
        <div className={`${styles.wrap} h-screen`}>
            <div className={`${styles.container} gap-2 bg-red-800 justify-center py-3 rounded-xl`}>
                <BiErrorCircle size={40}/>
                <h1 className="text-3xl font-bold">Something went wrong, refresh the page or try again later...</h1>
            </div>

        </div>
    );
};

export {Error};