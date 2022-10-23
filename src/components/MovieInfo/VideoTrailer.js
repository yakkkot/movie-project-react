import React from 'react';

import {styles} from "../../configs";
import {useSelector} from "react-redux";

const VideoTrailer = () => {

    const {video} = useSelector(state => state.movies);

    return (
        <>
            {video.length ?
                (<div className={`${styles.container} h-screen flex-col justify-center gap-[3%]`}>
                        {video[0]?.name && <div className="self-start text-3xl font-bold">{video[0].name}</div>}
                    <iframe
                        src={`https://www.youtube.com/embed/${video[0]?.key}`}
                        width="100%"
                        height="75%"
                        allowFullScreen
                        title="video"
                    />
                </div>) :
                <div className={`${styles.container} text-3xl h-[200px] font-bold`}>Trailer coming soon...</div>}
        </>
    );
};

export {VideoTrailer};