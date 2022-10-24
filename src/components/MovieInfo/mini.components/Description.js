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
                    <div>
                        <h1 className="text-6xl font-bold">{value?.title}</h1>
                        {value.tagline && <h2 className="text-lg mt-1">{value.tagline}</h2>}
                    </div>
                    <div className="flex items-center gap-2">
                        {value?.genres?.map((genre, index) =>
                            <div
                                key={index}
                                className="py-1 px-5 border-2 border-rose-900 bg-[#600F0F] rounded-[30px]">{genre.name}</div>
                        )}
                    </div>
                    <div className="text-base">
                        <div className="flex items-center">
                            <BsStarFill className="text-yellow-400 mr-2"/>
                            <p>{value?.vote_average.toFixed(1)}</p>
                            <TbMinusVertical/>
                            <p className="text-sm">{value?.vote_count} votes</p>
                        </div>
                        <p>Release date: {value?.release_date}</p>
                    </div>
                    <p className={`${styles.p_text} w-[90%]`}>{value?.overview}</p>
                </div>
                <CastActors credits={credits}/>
            </div>
        </div>
    );
};

export {Description};