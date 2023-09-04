import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useDesignSystemsLoader = () => {
  const config = useRuntimeConfig();


  const state = useQuery({
    queryKey: ["design-systems"],
    queryFn: () =>
      axios.call("get", `${config.public.API_BASE_URL}/api/design-systems?populate=*&filters[is_public][$eq]=true`),
    select: (res) => {      
      return res.data.data
    }
  });

  return state;
};
