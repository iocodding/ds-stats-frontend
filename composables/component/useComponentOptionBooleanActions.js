import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useComponentOptionBooleanActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  return {
    loading,
    createComponentOptionBoolean(componentOptionBoolean) {
      loading.value = true
      const promise = axios.post(`http://dssspecs-backend-ibiz5.ondigitalocean.app/api/component-option-booleans`, { data:  componentOptionBoolean }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
    deleteComponentOption(componentOption) {
      const promise = axios.delete(`http://dssspecs-backend-ibiz5.ondigitalocean.app/api/component-options/${componentOption.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      })
      return promise;
    },
    updateComponentOptionBoolean(componentOptionBoolean) {
      loading.value = true
      const promise = axios.put(`http://dssspecs-backend-ibiz5.ondigitalocean.app/api/component-option-booleans/${componentOptionBoolean.id}`, { data: componentOptionBoolean }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['component-options'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
