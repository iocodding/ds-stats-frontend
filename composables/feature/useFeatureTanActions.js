import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useFeatureTanActions() {
  const config = useRuntimeConfig();
  const queryClient = useQueryClient()
  const loading = ref(false);
  return {
    loading,
    createFeature(feature) {
      loading.value = true
      const promise = axios.post(`${config.public.API_BASE_URL}/api/features`, { data:  feature }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['features'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
    deleteComponent(component) {
      const promise = axios.delete(`${config.public.API_BASE_URL}/api/components/${component.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['features'] })
      })
      return promise;
    },
    updateFeature(component) {
      loading.value = true
      const promise = axios.put(`${config.public.API_BASE_URL}/api/components/${component.id}`, { data: component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['features'] })
      }).finally(() => {
        loading.value = false
      })
      return promise;
    },
  };
}
