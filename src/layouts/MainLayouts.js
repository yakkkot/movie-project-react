import React, {useEffect} from 'react';

import {Outlet} from 'react-router-dom'
import {Header, MoviesList} from "../components";
import useLocalStorage from "use-local-storage";
import {useDispatch} from "react-redux";
import {getGenres,switchCssTheme} from "../redux";



const MainLayouts = () => {

    // const location = useLocation()
    // if((location.pathname==='/home') && location.search.includes('?query')){
    //     return <Navigate to={`/movies${location.search}`}/>
    // }
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getGenres());
    // }, []);
    // const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark')

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    dispatch(switchCssTheme(theme));
    const switchTheme = () => {
        // const newTheme = theme === 'light' ? 'light' : 'dark';

        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
        dispatch(switchCssTheme(newTheme));
    }

    ((theme==='light') ? document.body.style.backgroundColor = "#e7dbdb" : document.body.style.backgroundColor = "#0E0E0F")
    return (
        <div className="app" data-theme={theme}>
            <Header switchTheme={switchTheme}/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};