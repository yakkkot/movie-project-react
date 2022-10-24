import React  from 'react';



const UserInfo = ({account}) => {

    return (
        <>
            {account &&
                <div className="h-[80px] flex items-center justify-center flex-col text-[14px]">
                    <div>
                        <img className="h-[35px] w-[35px]"
                             src={`https://image.tmdb.org/t/p/original${account.avatar.tmdb.avatar_path}`}
                             alt=""/>
                    </div>
                    {account?.username}
                </div>
            }
        </>
    );
};

export {UserInfo};