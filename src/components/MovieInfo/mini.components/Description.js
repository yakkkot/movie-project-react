import React from 'react';

import {PosterPreview} from "../../index";
import {BsStarFill} from "react-icons/bs";
import {TbMinusVertical} from "react-icons/tb";
import {styles} from "../../../configs";
import {CastActors} from "./CastActors";

const Description = ({value,credits}) => {
    return (
        <div className="w-[100%] z-10 flex justify-center gap-[5%]">
            <PosterPreview movie={value} css={'w-[25%] h-full flex items-center justify-center'}/>

            <div className="w-[65%]">
                <div className="flex flex-col gap-[15px]">
                    <h1 className="text-6xl font-bold">{value?.title}</h1>
                    <div className="flex items-center gap-2">
                        {value?.genres?.map((genre, index) =>
                            <div
                                key={index}
                                className="py-1 px-5 border-2 border-rose-900 bg-[#600F0F] rounded-[30px]">{genre.name}</div>
                        )}
                    </div>
                    <div className="flex items-center text-base">
                        <BsStarFill className="text-yellow-400 mr-2"/>
                        <p>{value?.vote_average.toFixed(1)}</p>
                        <TbMinusVertical/>
                        <p className="text-sm">{value?.vote_count}</p>
                    </div>
                    <p className={`${styles.p_text} w-[90%]`}>{value?.overview}</p>
                </div>
                <CastActors credits={credits}/>
            </div>
        </div>
    );
};

export {Description};