export const useAdmin = () => {
    const authUser = useAuthUser();
    console.log({ authUser: authUser.value })
    return computed(() => {
        if (!authUser.value) return false;

        return true;
    });
};
