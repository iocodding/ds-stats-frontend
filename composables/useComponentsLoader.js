import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useComponentsLoader = () => {
  const state = useQuery({
    queryKey: ["components"],
    queryFn: () =>
      axios.call("get", "http://localhost:1337/api/components"),
    select: (res) => {

      const normalize =  res.data.data.map((entry) => {
        return {
          ...entry.attributes,
          id: entry.id,
        };
      });
      
      return normalize;
    },
  });

  return state;
};
