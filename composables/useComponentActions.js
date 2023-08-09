import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";


export function useComponentActions() {
  const queryClient = useQueryClient()

  return {
    createComponent(component) {
      const promise = axios.post(`http://localhost:1337/api/components`, { data:  component }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['components'] })
      })
      return promise;
    },
    deleteComponent(component) {
      const promise = axios.delete(`http://localhost:1337/api/components/${component.id}`).then(() => {
        queryClient.invalidateQueries({ queryKey: ['components'] })
      })
      return promise;
    },
    updateComponent() {
      const state = useMutation({
        mutationFn: (entity) =>
          axios.post("http://localhost:1337/api/feature-entities", {
            data: entity,
          }),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['components'] })
        },
      });
      return state;
    },
  };
}
