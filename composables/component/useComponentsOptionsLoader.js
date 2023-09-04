import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useComponentsOptionsLoader = ({component}) => {
  const config = useRuntimeConfig();

  const state = useQuery({
    queryKey: ["component-options"],
    queryFn: () =>
      axios.call("get", `${config.public.API_BASE_URL}/api/component-options?populate=deep&filters[component][id]=${component.id}`),
      select: (res) => {      
        return res.data.data
     }
  });

  return state;
};
