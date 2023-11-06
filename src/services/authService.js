import { API_URL } from "./API_URL";

import axios from "axios";

export const get = (route) => {


    return axios.get(API_URL + route);
};

export const post = (route, body) => {
    

    return axios.post(API_URL + route, body);
};

export const put = (route, body) => {

    return axios.put(API_URL + route, body);
};

export const axiosDelete = (route) => {

    return axios.delete(API_URL + route);
};