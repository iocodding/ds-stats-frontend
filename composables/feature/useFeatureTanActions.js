import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useFeatureTanActions() {
  const queryClient = useQueryClient()
  const loading = ref(false);
  return {
    loading,
    createFeature(component) {
      loading.value = true
      const promise = axios.post(`https://dssspecs-backend-ibiz5.ondigitalocean.app/api/features`, { data:  component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['features'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
    deleteComponent(component) {
      const promise = axios.delete(`https://dssspecs-backend-ibiz5.ondigitalocean.app/api/components/${component.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['features'] })
      })
      return promise;
    },
    updateFeature(component) {
      loading.value = true
      const promise = axios.put(`https://dssspecs-backend-ibiz5.ondigitalocean.app/api/components/${component.id}`, { data: component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['features'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
