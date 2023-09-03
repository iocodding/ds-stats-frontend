import axios from "axios";

export function useAxios() {
    var api_instance = axios.create({
        baseURL: "https://dssspecs-backend-ibiz5.ondigitalocean.app/api",
    });

    return api_instance;
}