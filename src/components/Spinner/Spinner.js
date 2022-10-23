import React from 'react';

import {TailSpin} from "react-loader-spinner";
import {styles} from "../../configs";

const Spinner = () => {
    return (
        <div className={`${styles.wrap} justify-center h-screen`}>
            <TailSpin
                height="100"
                width="100"
                color="#600F0F"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export {Spinner};