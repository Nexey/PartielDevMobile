import axios from "axios";
import {listApiKeys} from "./ApiKey"

const url       = "https://api.themoviedb.org/3";
const url_end   = `?api_key=${listApiKeys.TMDB}&language=fr-FR&page=1`;

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});

let params = {"movie_id":"", "param2":"","param3":"","param4":""};
// /movie/464052?api_key=607c9fde520f8b987d23d524619af532&language=en-US

const getTMDBResults = async(endpoint) => {
    try {
        const res = await callAPI.get(endpoint + url_end);
        return res;
    } catch (err) {
        console.log("API conection failed");
    }
}
export const getMoviesByPopularity = async() => {
    return await getTMDBResults(`movie/popular`)
}

export const getMovieByID = async(...arr) => {
    arr.forEach(arg => {
        if ("movie_id" in arg)
            params.movie_id = arg.movie_id;
    });

    return await getTMDBResults(`/movie/${params.movie_id}`)
}