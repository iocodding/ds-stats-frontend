import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useFigmaActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  return {
    loading,
    updateFigmaRecourse(component) {
      loading.value = true
      const promise = axios.put(`http://localhost:1337/api/figma-files/${component.id}`, { data: component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['components'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
