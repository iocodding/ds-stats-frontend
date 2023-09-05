import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useFigmaFileLoader = (queryKey = 'figma-files') => {
  const config = useRuntimeConfig();

  const state = useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      axios.call("get", `${config.public.API_BASE_URL}/api/figma-files/1`),
      select: (res) => {      
        return res.data.data
     }
  });

  return state;
};
