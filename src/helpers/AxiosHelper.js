import axios from "axios";

const url       = "";
const url_end   = "";

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});

let params = {"param1":"", "param2":"","param3":"","param4":""};

const getResults = async(endpoint) => {
    try {
        const res = await callAPI.get(endpoint + url_end);
        return res;
    } catch (err) {
        console.log("API conection failed");
    }
}

export const getResultsByCriteria = async(...arr) => {
    arr.forEach(arg => {
        if ("cityName" in arg)
            params.cityName = arg.cityName;
    });

    return await getResults(`/api?param1=${params.param1}&param2=${params.param2}`)
}