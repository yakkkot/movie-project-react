import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesServices} from "../../services";

const initialState = {
    movies: [],
    maxPage: 1,
    genres: [],
    trendingMovie: [],
    topRatedMovie: [],
    allInformationMovie: null,
    credits: [],
    similarMovies: [],
    video: [],
    cssTheme: '',
    loading: false,
    errors: {
        allMovies: null,
        genreMovies: null,
        genres: null,
        trendingMovie: null,
        topRatedMovie: null,
        movieInfo: null,
        credits: null,
        searchMovie: null,
    }
};

export const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async (id,{rejectWithValue})=>{
        try {
            const {data} = await moviesServices.getAll(id);
            return data;
        }
        catch (e){
            console.log(e);
            return rejectWithValue(e.response.data)
        }
    }
);

export const getGenres = createAsyncThunk(
    'moviesSlice/getGenres',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await moviesServices.getGenres();
            return data;
        }
        catch (e){
            console.log(e);
            return rejectWithValue(e.response.data)
        }
    }
);


export const getTrendingMovie = createAsyncThunk(
    'moviesSlice/getTrendingMovie',
    async (_, {rejectWithValue}) => {
        try{
            const {data} = await moviesServices.getTrendingMovie();
            return data;
        }
        catch(e){
            console.log(rejectWithValue(e.response.data));

            return rejectWithValue(e.response.data)
        }
    }
);

export const getTopRatedMovie = createAsyncThunk(
    'moviesSlice/getTopRatedMovie',
    async (_, {rejectWithValue}) => {
        try{
            const {data} = await moviesServices.getTopRatedMovie();
            return data;
        }
        catch(e){
            console.log(e);
            return rejectWithValue(e.response.data)
        }
    }
);

export const getAllInformationMovie = createAsyncThunk(
    'moviesSlice/getAllInformationMovie',
    async (id, {rejectWithValue}) => {
        try{
            const {data} = await moviesServices.getOneMovie(id);
            return data;
        }
        catch(e){
            console.log(e.response.data);
            return rejectWithValue(e.response.data)
        }
    }
);

export const getCredits = createAsyncThunk(
    'moviesSlice/getCredits',
    async (id, {rejectWithValue}) => {
        try{
            const {data} = await moviesServices.getCredits(id);
            return data;
        }
        catch(e){
            console.log(e);
            return rejectWithValue(e.response.data)
        }
    }
);

export const getSimilarMovies = createAsyncThunk(
    'moviesSlice/getSimilarMovies',
    async (id, {rejectWithValue}) => {
        try{
            const {data} = await moviesServices.getSimilarMovie(id);
            return data;
        }
        catch(e){
            console.log(e);
        }
    }
);

export const getTrailerVideo = createAsyncThunk(
    'moviesSlice/getTrailerVideo',
    async (id, {rejectWithValue}) => {
        try{
            const {data} = await moviesServices.getTrailerVideo(id);
            return data;
        }
        catch(e){
            console.log(e);
        }
    }
);

export const getSearchMovie = createAsyncThunk(
    'moviesSlice/getSearchMovie',
    async ({query,page}, {rejectWithValue}) => {
        try{
            const {data} = await moviesServices.getSearchMovie(query,page);
            return data;
        }
        catch(e){
            console.log(e.message);
            // return e.message
        }
    }
);
export const getMoviesWithGenre = createAsyncThunk(
    'moviesSlice/getMoviesWithGenre',
    async ({id,page}, {rejectWithValue}) => {
        try{
            const {data} = await moviesServices.getMoviesWithGenre(id,page);
            return data;
        }
        catch(e) {
            console.log(e.message);
            return rejectWithValue(e.response.data)
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        switchCssTheme: (state, action) => {
            state.cssTheme = action.payload;
        }

    },


    extraReducers:{

        [getMovies.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
            state.maxPage = action.payload.total_pages;
            state.loading = false;
            state.errors.allMovies = null;
        },
        [getMovies.pending]: (state, action) => {
            state.loading = true;
        },
        [getMovies.rejected]: (state, action) => {
            state.loading = false;
            state.errors.allMovies = action.payload;
        },




        [getGenres.fulfilled]: (state, action) => {
            state.genres = action.payload.genres;
        },
        // [getGenres.pending]: (state, action) => {
        //     state.loading = true;
        // },


        [getTrendingMovie.fulfilled]: (state, action) => {
            state.trendingMovie = action.payload.results
            state.loading = false;
            state.errors.trendingMovie = null;
        },
        [getTrendingMovie.pending]: (state, action) => {
            state.loading = true;
        },
        [getTrendingMovie.rejected]: (state, action) => {
            state.loading = false;
            state.errors.trendingMovie = action.payload;
        },



        [getTopRatedMovie.fulfilled]: (state, action) => {
            state.topRatedMovie = action.payload.results;
            state.loading = false;
            state.errors.topRatedMovie = null;
        },
        [getTopRatedMovie.pending]: (state, action) => {
            state.loading = true;
        },
        [getTopRatedMovie.rejected]: (state, action) => {
            state.loading = false;
            state.errors.topRatedMovie = action.payload;
        },


        [getAllInformationMovie.fulfilled]: (state, action) => {
            state.allInformationMovie = action.payload;
            state.loading = false;
            state.errors.movieInfo = null;
        },
        [getAllInformationMovie.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllInformationMovie.rejected]: (state, action) => {
            state.loading = false;
            state.errors.movieInfo = action.payload;
        },



        [getCredits.fulfilled]: (state, action) => {
            state.credits = action.payload.cast
        },
        [getSimilarMovies.fulfilled]: (state, action) => {
            state.similarMovies = action.payload.results
        },

        [getTrailerVideo.fulfilled]: (state, action) => {
            state.video = action.payload.results
        },



        [getSearchMovie.fulfilled]: (state, action) => {
            state.movies = action.payload.results
            state.maxPage = action.payload.total_pages;
            state.loading = false;
            state.errors.searchMovie = null;
        },

        [getSearchMovie.pending]: (state, action) => {
            state.loading = true;
        },
        [getSearchMovie.rejected]: (state, action) => {
            state.loading = false;
            state.errors.searchMovie = action.payload;
        },



        [getMoviesWithGenre.fulfilled]: (state, action) => {
            state.movies = action.payload.results
            state.maxPage = action.payload.total_pages;
            state.loading = false;
            state.errors.genreMovies = null;
        },
        [getMoviesWithGenre.pending]: (state, action) => {
            state.loading = true;
        },
        [getMoviesWithGenre.rejected]: (state, action) => {
            state.loading = false;
            state.errors.genreMovies = action.payload;
        },

    }
})

export const {switchCssTheme} = moviesSlice.actions;

export default moviesSlice.reducer;