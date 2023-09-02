import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useComponentsOptionsVariantsActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  return {
    loading,
    createComponentOptionVariant(component) {
      loading.value = true
      const promise = axios.post(`https://dssspecs-backend-ibiz5.ondigitalocean.app/api/component-option-variants`, { data:  component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
    deleteComponentOptionVariant(componentOptionVariant) {
      const promise = axios.delete(`https://dssspecs-backend-ibiz5.ondigitalocean.app/api/component-option-variants/${componentOptionVariant.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      })
      return promise;
    },
    updateComponentOptionVariant(componentOptionVariant) {
      loading.value = true
      const promise = axios.put(`https://dssspecs-backend-ibiz5.ondigitalocean.app/api/component-option-variants/${componentOptionVariant.id}`, { data: componentOptionVariant }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
