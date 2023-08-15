import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useComponentsOptionsLoader = () => {
  const state = useQuery({
    queryKey: ["component-options"],
    queryFn: () =>
      axios.call("get", "http://localhost:1337/api/component-options?populate=*&filters[component][id]=36"),
    select: (res) => {

      const normalize =  res.data.data.map((entry) => {
        console.log(entry.id)
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
