
import { useLocalStorage, StorageSerializers } from '@vueuse/core'

export const useAuthUser = () => {
    return useLocalStorage('authUser', null, { serializer: StorageSerializers.object });
};
