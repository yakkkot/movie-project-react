import axios from "axios";
import {baseURL} from "../configs";

const axiosServices = axios.create({baseURL});

const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTliOTc3NDAzYjRmYzYwYTgwZmY0N2ZiOTJkZGUzYiIsInN1YiI6IjYzNDljODM2NTAxY2YyMDA3YTFlOWY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s5L8afa63lCe2W_UFT-vHJEfj8zdA8sEEknqi1piICU';

axiosServices.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${access}`;
    return config;
});

export {
    axiosServices
}