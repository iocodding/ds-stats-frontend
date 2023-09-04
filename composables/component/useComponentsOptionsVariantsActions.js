import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useComponentsOptionsVariantsActions() {
  const config = useRuntimeConfig();
  const queryClient = useQueryClient()
  const loading = ref(false);
  return {
    loading,
    createComponentOptionVariant(component) {
      loading.value = true
      const promise = axios.post(`${config.public.API_BASE_URL}/api/component-option-variants`, { data:  component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
    deleteComponentOptionVariant(componentOptionVariant) {
      const promise = axios.delete(`${config.public.API_BASE_URL}/api/component-option-variants/${componentOptionVariant.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      })
      return promise;
    },
    updateComponentOptionVariant(componentOptionVariant) {
      loading.value = true
      const promise = axios.put(`${config.public.API_BASE_URL}/api/component-option-variants/${componentOptionVariant.id}`, { data: componentOptionVariant }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
