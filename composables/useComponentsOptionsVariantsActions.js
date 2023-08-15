import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useComponentsOptionsVariantsActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  return {
    loading,
    createComponentOptionVariant(component) {
      loading.value = true
      const promise = axios.post(`http://localhost:1337/api/component-option-variants`, { data:  component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
    deleteComponentOptionVariant(componentOptionVariant) {
      const promise = axios.delete(`http://localhost:1337/api/component-option-variants/${componentOptionVariant.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      })
      return promise;
    },
    updateComponent(component) {
      loading.value = true
      const promise = axios.put(`http://localhost:1337/api/components/${component.id}`, { data: component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['components'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
