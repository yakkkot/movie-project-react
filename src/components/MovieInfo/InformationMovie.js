import React from 'react';

import {styles} from "../../configs";

import {useSelector} from "react-redux";
import {BackDrop} from "./mini.components/BackDrop";
import {Description} from "./mini.components/Description";

const InformationMovie = () => {

    const {allInformationMovie:value,credits} = useSelector(state => state.movies);

    return (

        <div className="h-screen text-red-50 text_shadow_all">
            <div className={`${styles.wrap}`}>
                <div className={`${styles.container} h-screen relative justify-end flex-col`}>
                    <BackDrop value={value}/>
                    {value &&
                        <Description value={value} credits={credits}/>
                    }
                </div>
            </div>
        </div>
    );
};

export {InformationMovie};