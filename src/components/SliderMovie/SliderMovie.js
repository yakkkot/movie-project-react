import React from 'react';

import { Autoplay, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import {styles} from "../../configs";
import {MoviesListCard} from "../index";

const SliderMovie = ({movies, header, seconds, sliders}) => {


    return (

        <div>
            <h2 className="text-3xl font-bold my-2">{header}</h2>
            <div className={`${styles.container} `}>
                {movies && (
                    <Swiper
                        direction={'horizontal'}
                        mousewheel={true}
                        slidesPerView={sliders}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{delay: seconds}}
                        modules={[Autoplay, Mousewheel]}
                        className="mySwiper">
                        {movies.map(movie =>
                            <SwiperSlide key={movie.id}>
                                <div className="py-2 px-1.5 cursor-grab">
                                    <MoviesListCard key={movie.id} movie={movie}/>
                                    <p className="font-bold px-1 py-1 text-[16px]">{movie.title}</p>
                                </div>
                            </SwiperSlide>)}
                    </Swiper>
                )}
            </div>
        </div>

    );
};

export {SliderMovie};