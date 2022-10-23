import React from 'react';

const BackDrop = ({value}) => {

    return (
        <div className='w-[85%] h-[85%] absolute top-[80px]'>
            {value?.backdrop_path &&
                <img className="w-full h-[70%] rounded-[5px]"
                     src={`https://image.tmdb.org/t/p/original${value.backdrop_path}`} alt={value?.title}/> }
        </div>
    );
};

export {BackDrop};
