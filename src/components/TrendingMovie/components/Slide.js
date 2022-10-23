import React from 'react';

import {Link} from "react-router-dom"
import {styles} from "../../../configs";
import {BsFillPlayFill, BsStarFill} from "react-icons/bs";
import {TbMinusVertical} from "react-icons/tb";
import {GenreBadge,PosterPreview} from "../../index";

const Slide = ({value}) => {
    return (
        <div className={`${styles.wrap} h-screen text-3xl`}
             style={{
                 backgroundImage: `url(https://image.tmdb.org/t/p/original${value?.backdrop_path})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
             }}>
            <div className={`${styles.container} gap-[12%]`}>
                <div className="w-[55%] flex flex-col gap-[40px]">
                    <h1 className="text-6xl font-bold">{value?.title}</h1>
                    <div className="flex items-center text-base">
                        <BsStarFill className="text-yellow-400 mr-2"/>
                        <p>{value?.vote_average.toFixed(1)}</p>
                        <TbMinusVertical/>
                        <p className="text-sm">{value?.vote_count}</p>

                    </div>
                    <p className={`${styles.p_text}`}>{value?.overview}</p>
                    <div className="flex items-center gap-[30px]">
                        <Link to={`/movie/${value?.id}`}>
                            <button className={`${styles.button_info}`}>
                                All information
                            </button>
                        </Link>
                        <button className={`${styles.button_trailer}`}>
                            <BsFillPlayFill size={25}/>
                            Watch trailer
                        </button>
                    </div>
                </div>
                <div className={`w-[25%] ${styles.eff_duration} relative py-1 px-1 hover:scale-105 cursor-pointer`}>
                    <GenreBadge genre_ids={value.genre_ids}/>
                    <PosterPreview movie={value}/>
                </div>
            </div>
        </div>
    );
};

export {Slide};