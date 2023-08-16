import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useComponentOptionsActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  return {
    loading,
    createComponentOption(componentOption) {
      loading.value = true
      const promise = axios.post(`http://localhost:1337/api/component-options`, { data:  componentOption }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
    deleteComponentOption(componentOption) {
      const promise = axios.delete(`http://localhost:1337/api/component-options/${componentOption.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      })
      return promise;
    },
    updateComponentOption(componentOption) {
      loading.value = true
      const promise = axios.put(`http://localhost:1337/api/component-options/${componentOption.id}`, { data: componentOption }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
