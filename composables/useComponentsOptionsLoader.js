import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useComponentsOptionsLoader = ({component}) => {
  const state = useQuery({
    queryKey: ["component-options"],
    queryFn: () =>
      axios.call("get", `http://localhost:1337/api/component-options?populate=deep&filters[component][id]=${component.id}`),
      select: (res) => {      
        return res.data.data
     }
  });

  return state;
};
