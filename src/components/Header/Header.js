import React, {useEffect} from 'react';

import {useLocation} from 'react-router-dom'
import {styles} from "../../configs";
import {FindForm, SwitcherTheme, UserInfo} from "../index";
import {Nav, Logo} from "./mini.components";
import {useDispatch, useSelector} from "react-redux";
import {getAccout, getGenres} from "../../redux";


const Header = ({switchTheme}) => {

    const {pathname} = useLocation()

    const dispatch = useDispatch();
    const {cssTheme,account} = useSelector(state => state.movies);

    const backgroud = (cssTheme==='light') ? 'bg-[#e7dbdb]' : 'bg-[#0E0E0F]';


    useEffect(() => {
        dispatch(getGenres());
        dispatch(getAccout())
    }, []);

    return (

        <div
            className={`${styles.wrap} z_index_header fixed text-2xl transition duration-400 ${pathname !== '/home' && backgroud}`}>
            <div className="absolute left-[25px] top-[10px]">
                <UserInfo account={account}/>
            </div>
            <div className={`${styles.container} relative z-40 h-[80px] justify-between`}>
                <Logo/>
                {pathname === '/movies' && <FindForm/>}
                <Nav/>
            </div>
            <div className="absolute right-0 h-full flex items-center">
            <SwitcherTheme switchTheme={switchTheme}/>
            </div>
        </div>

    );
};

export {Header};