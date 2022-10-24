import React, {useState} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/autoplay"

import {Slide} from "./components/Slide";
import {SliderMovie,Spinner,ModalWindow} from "../index"
import {styles} from "../../configs";
import {useSelector} from "react-redux";


const TrendingMovie = () => {

    const [showModal,setShowModal] = useState(false)
    const {trendingMovie,topRatedMovie,loading,errors} = useSelector(state => state.movies);

    return (
        <>
            {!loading ?
                <div className="h-screen w-full">
                    <Swiper
                        direction={'horizontal'}
                        modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{delay: 8000}}
                        className="mySwiper">

                        {trendingMovie.slice(0, 3).map(value =>
                            <SwiperSlide key={value.id}>
                                <Slide value={value} setShowModal={setShowModal}/>
                            </SwiperSlide>)}
                    </Swiper>
                    <div className={`${styles.wrap} py-1`}>
                        <div className={`${styles.container} flex-col gap-[5%] mb-1`}>
                            <SliderMovie movies={trendingMovie} header={'Trending Movies'} seconds={3000} sliders={6}/>
                            {!errors.topRatedMovie &&
                                <SliderMovie movies={topRatedMovie} header={'Top Rated Movies'} seconds={3500}
                                             sliders={5}/>
                            }
                        </div>
                    </div>
                    <ModalWindow setShowModal={setShowModal} showModal={showModal}/>
                </div>
                : <Spinner/>}
        </>

    );
};

export {TrendingMovie};