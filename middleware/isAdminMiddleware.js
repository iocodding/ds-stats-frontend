export default defineNuxtRouteMiddleware(async () => {
    const isAdmin = useAdmin();
    console.log({ process:process.server})
    if (!isAdmin.value)  {
        console.log('navigateTo({ name: "login" })')
        return navigateTo({ name: "login" })
    }
    return abortNavigation();
});
