import {configureStore} from "@reduxjs/toolkit";
import moviesSlice from "./slices/movies.slice"


const store =  configureStore({
    reducer: {
        movies: moviesSlice,
    },
});

export {store}