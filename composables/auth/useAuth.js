import { storeToRefs } from "pinia";

export const useAuth = () => {
    const config = useRuntimeConfig();

    const store = useStore();
    const { user } = storeToRefs(store);



    const login = async (body) => {
        const data = await $fetch(`${config.public.API_BASE_URL}/api/auth/local`, {
            method: "POST",
            body,
        });
        
        user.value = {auth: true, ...data.user }
        return data.user;
    };

    const register = async (body) => {
        const data = await $fetch(`${config.public.API_BASE_URL}/api/auth/local/register`, {
            method: "POST",
            body
        });

        // setUser(data.user);
        return data.user;
    };


    const logout = async () => {
        // const data = await $fetch("/auth/logout", {
        //     method: "POST",
        // });

        user.value = { auth: false }
    };


    return {
        login,
        register,
        logout,
    };
};
