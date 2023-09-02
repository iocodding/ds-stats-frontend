export default defineNuxtRouteMiddleware(async () => {
    const user = useAuthUser();
    
    if (user.value) {
        console.log(user)
         return navigateTo({ name: "index" });
    }
});
