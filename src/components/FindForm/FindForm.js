import React from 'react';

import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import {styles} from "../../configs";
import {BiErrorCircle} from "react-icons/bi";


const FindForm = () => {

    const {handleSubmit, reset, register, formState: {isValid, errors}} = useForm({mode:'onChange'});

    const [query, setQuery] = useSearchParams();

    const submit = (value) => {
        setQuery({query: value.movie})
        reset();
    };

    return (
        <div className={`${styles.flex_center} text-red-50 text-[14px]`}>
            <form className={`${styles.flex_center} flex-col gap-2 relative`} onSubmit={handleSubmit(submit)}>
                <div className={`${styles.flex_center} gap-2`}>
                    <input type="text" placeholder="Movie title" {...register('movie', {
                        required: true, minLength: 2, maxLength: 40
                    })}
                           className="w-[200px]  px-2 border-[1px]  outline-0 bg-gray-200 border-red-600 rounded-xl text-black"/>
                    <button disabled={!isValid}
                            className={`${styles.eff_duration} text-[14px] bg-red-700 opacity-30 enabled:opacity-100 rounded-[15px] px-4`}>
                        Search
                    </button>
                </div>
                <div>
                    {errors.movie &&
                    (<div className="flex items-center justify-start absolute w-full left-2 h-2">
                        <BiErrorCircle className="text-red-700" size={18}/>
                        <p className="pl-1 text-red-700 text-[12px]">Enter the correct title!</p>
                    </div>)
                }

                </div>
            </form>
        </div>
    );
};
export {FindForm};