import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useFeatureTanActions() {
  const queryClient = useQueryClient()

  return {
    createFeatureEntity() {
      const state = useMutation({
        mutationFn: (entity) =>
          axios.post("http://localhost:1337/api/feature-entities", {
            data: entity,
          }),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['feature']});
        }
      });
      return state;
    },
    deleteFeatureEntity() {
      const state = useMutation({
        mutationFn: (entityId) =>
          axios.delete(`http://localhost:1337/api/feature-entities/${entityId}`),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['feature'] })
        },
      });
      return state;
    },
    updateFeatureEntity() {
      const state = useMutation({
        mutationFn: (entity) =>
          axios.post("http://localhost:1337/api/feature-entities", {
            data: entity,
          }),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['feature'] })
        },
      });
      return state;
    },
  };
}
