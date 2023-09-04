import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useComponentsLoader = (systemId = 1) => {
  const config = useRuntimeConfig();

  const state = useQuery({
    queryKey: ["components"],
    queryFn: () =>
      axios.call("get", `${config.public.API_BASE_URL}/api/components?populate=*&filters[design_system][id][$eq]=${systemId}&sort[0]=design_system_section.name`),
      select: (res) => {      
        return res.data.data
     }
  });

  return state;
};
