import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useFigmaActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  const config = useRuntimeConfig();
  return {
    loading,
    updateFigmaRecourse(component) {
      loading.value = true
      const promise = axios.put(`${config.public.API_BASE_URL}/api/figma-files/${component.id}`, { data: component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['components'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
