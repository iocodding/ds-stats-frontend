import axios from "axios";

export function useAxios() {
    var api_instance = axios.create({
        baseURL: "http://dssspecs-backend-ibiz5.ondigitalocean.app/api",
    });

    return api_instance;
}