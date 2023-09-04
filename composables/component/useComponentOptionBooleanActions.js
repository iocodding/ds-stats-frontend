import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useComponentOptionBooleanActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  const config = useRuntimeConfig();
  return {
    loading,
    createComponentOptionBoolean(componentOptionBoolean) {
      loading.value = true
      const promise = axios.post(`${config.public.API_BASE_URL}/api/component-option-booleans`, { data:  componentOptionBoolean }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
    deleteComponentOption(componentOption) {
      const promise = axios.delete(`${config.public.API_BASE_URL}/api/component-options/${componentOption.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      })
      return promise;
    },
    updateComponentOptionBoolean(componentOptionBoolean) {
      loading.value = true
      const promise = axios.put(`${config.public.API_BASE_URL}/api/component-option-booleans/${componentOptionBoolean.id}`, { data: componentOptionBoolean }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
