import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const moviesServices = {
    getAll: (page = 1) => axiosServices.get(urls.movies, {params: {page}}),
    getOneMovie: (id) => axiosServices.get(`${urls.movie}/${id}`),
    getTrendingMovie: () => axiosServices.get(urls.trending),
    getTopRatedMovie: () => axiosServices.get(urls.top_rated),
    getSimilarMovie: (id) => axiosServices.get(`${urls.movie}/${id}/similar`),
    getSearchMovie: (query, page) => axiosServices.get(urls.search, {params: {query, page}}),
    getGenres: () => axiosServices.get(urls.genres),
    getMoviesWithGenre: (id, page = 1) => axiosServices.get(urls.movies + `&with_genres=${id}`, {params: {page}}),
    getCredits: (id) => axiosServices.get(`${urls.movie}/${id}/credits`),
    getTrailerVideo: (id) => axiosServices.get(`${urls.movie}/${id}/videos`)
};

export {
    moviesServices
};
