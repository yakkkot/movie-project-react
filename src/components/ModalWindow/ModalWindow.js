import React from 'react';

import {BsCheck2All} from "react-icons/bs";
import {IoIosClose} from "react-icons/io"
import css from "./Modal.module.css"
import {useSelector} from "react-redux";
import {styles} from "../../configs";

const ModalWindow  = ({showModal,setShowModal}) => {

    const {video} = useSelector(state=>state.movies)
    if(!showModal) return null;

    return (
            <div onClick={() => setShowModal(false)} className={`${css.wrap}`}>
                <div onClick={(e) => e.stopPropagation()} className={`${css.main_container}`}>
                    <div className={`${css.content} text-red-50 text_shadow_all relative flex justify-center items-center`}>
                        <div className="flex items-center justify-end absolute right-2 top-2">
                            <IoIosClose onClick={() => setShowModal(false)} size={35} className="cursor-pointer duration-300 hover:text-red-700"/>
                        </div>
                        {video.length ?
                            (<div className={`${styles.container} h-[90vh] w-[90%] justify-center items-center flex-col  gap-[2%]`}>
                                {video[0]?.name && <div className="self-start text-3xl font-bold">{video[0].name}</div>}
                                <iframe
                                    src={`https://www.youtube.com/embed/${video[0]?.key}`}
                                    width="100%"
                                    height="85%"
                                    allowFullScreen
                                    title="video"
                                />
                            </div>) : <div className={`${styles.container} justify-center text-3xl h-[200px] font-bold`}>Trailer coming
                                soon...</div>}
                    </div>
                </div>
            </div>

    );
};

export {ModalWindow};