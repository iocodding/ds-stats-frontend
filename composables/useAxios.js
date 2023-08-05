import axios from "axios";

export function useAxios() {
    var api_instance = axios.create({
        baseURL: "http://localhost:1337/api",
    });

    return api_instance;
}