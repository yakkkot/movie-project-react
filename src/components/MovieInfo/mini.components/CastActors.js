import React from 'react';

const CastActors = ({credits}) => {
    return (
        <>
            {credits &&
                <div className="w-[80%] text-[14px] py-2">
                    <h2 className="text-3xl font-bold mb-1.5">Cast</h2>
                    <div className="grid grid-cols-5 gap-2">
                        {credits.slice(0, 5).map((actor, index) =>
                            <div key={index} className="w-full">
                                {actor.profile_path ?
                                    <img className="w-full rounded-[5px]"
                                         src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                                         alt={`${actor.name}`}/> : <div className="h-[35%]"></div>
                                }
                                <p className="py-0.5">{actor.name}</p>

                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    );
};

export {CastActors};