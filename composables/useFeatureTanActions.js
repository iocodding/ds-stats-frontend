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
        onMutate: async (newTodo) => {
          // const previousTodos = queryClient.getQueryData(['feature'])
          queryClient.setQueryData(['feature'], (old) => { 
            const detach = { ...old };
            detach.data.data.attributes.feature_entities = detach.data.data.attributes.feature_entities.concat(newTodo);

            // const feature = detach.data.data.attributes;
            // console.log({ feature })

            // feature.feature_entities = feature.feature_entities.map((entry) => {
            //   return {
            //     ...entry.attributes,
            //     id: entry.id,
            //   };
            // });
            console.log({detach })
            return detach;
          })
        },
        onSettled: () => {
         // queryClient.invalidateQueries({ queryKey: ['feature'] })
        },
      });
      return state;
    },
    deleteFeatureEntity() {
      const state = useMutation({
        mutationFn: (entityId) =>
          axios.delete(`http://localhost:1337/api/feature-entities/${entityId}`),
        onSettled: () => {
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
      });
      return state;
    },
  };
}
