import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useComponentActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  return {
    loading,
    createComponent(component) {
      loading.value = true
      const promise = axios.post(`https://dssspecs-backend-ibiz5.ondigitalocean.app/api/components`, { data:  component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['components'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
    deleteComponent(component) {
      const promise = axios.delete(`https://dssspecs-backend-ibiz5.ondigitalocean.app/api/components/${component.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['components'] })
      })
      return promise;
    },
    updateComponent(component) {
      loading.value = true
      const promise = axios.put(`https://dssspecs-backend-ibiz5.ondigitalocean.app/api/components/${component.id}`, { data: component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['components'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
