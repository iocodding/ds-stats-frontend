
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware(async () => {
    const store = useStore();
    const { user } = storeToRefs(store);
    
    if (!user.value.auth) {
        return navigateTo({ name: "login" });
    }
});
