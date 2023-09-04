import axios from "axios";

export function useAxios() {
    var api_instance = axios.create({
        baseURL: "${config.public.API_BASE_URL}/api",
    });

    return api_instance;
}