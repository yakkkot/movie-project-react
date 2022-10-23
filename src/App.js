import React from 'react';

import {Routes,Route,Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {GenreMoviesPage, HomePage, MovieInformationPage, MoviesPage} from "./pages";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayouts/>}>
                <Route index element={<Navigate to={'/home'}/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movie/:id'} element={<MovieInformationPage/>}/>
                <Route path={'/genre/:id/:value'} element={<GenreMoviesPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};