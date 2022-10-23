import axios from "axios";
import {baseURL} from "../configs";

const axiosServices = axios.create({baseURL});

axiosServices.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_ACCESS_ACCESS_TOKEN}`;
    return config;
});

export {
    axiosServices
}