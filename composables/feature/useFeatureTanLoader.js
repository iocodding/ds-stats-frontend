import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useFeatureTanLoader = () => {
  const config = useRuntimeConfig();
  const state = useQuery({
    queryKey: ["features"],
    queryFn: () =>
      axios.call("get", `${config.public.API_BASE_URL}/api/features?populate=*`),
      select: (res) => {      
        return res.data.data
      }
  });

  return state;
};
