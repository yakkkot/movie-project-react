import React from 'react';

import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {styles} from "../../configs";


const FindForm = () => {

    const dispatch = useDispatch();

    const {handleSubmit, reset, register, formState: {isValid, errors}} = useForm({mode:'onSubmit'});

    const [query, setQuery] = useSearchParams();

    const submit = (value) => {
        setQuery({query: value.movie})
        reset();
    };

    return (
        <div className={`${styles.flex_center}`}>
            <form className="flex items-center gap-2" onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="Movie title" {...register('movie')}
                       className="w-[200px] text-[14px] px-2 border-[1px]  outline-0 bg-gray-200 border-red-600 rounded-xl text-black"/>
                <button className={`${styles.eff_duration} text-[14px] bg-red-700 rounded-[15px] px-4 hover:bg-red-900`}>Search</button>
            </form>
        </div>
    );
};

export {FindForm};