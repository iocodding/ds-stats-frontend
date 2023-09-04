import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useComponentOptionsActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  const config = useRuntimeConfig();

  return {
    loading,
    createComponentOption(componentOption) {
      loading.value = true
      return axios.post(`${config.public.API_BASE_URL}/api/component-options`, { data:  componentOption }).then((res) => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
        return res
      }).finally(() => {
        loading.value = false
      })
      //return promise;
    },
    deleteComponentOption(componentOption) {
      const promise = axios.delete(`${config.public.API_BASE_URL}/api/component-options/${componentOption.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      })
      return promise;
    },
    updateComponentOption(componentOption) {
      loading.value = true
      const promise = axios.put(`${config.public.API_BASE_URL}/api/component-options/${componentOption.id}`, { data: componentOption }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
