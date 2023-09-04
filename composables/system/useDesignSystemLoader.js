import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useDesignSystemLoader = ({ id }) => {
  const config = useRuntimeConfig();

  const state = useQuery({
    queryKey: ["design-system"],
    queryFn: () =>
      axios.call("get", `${config.public.API_BASE_URL}/api/design-systems/${id}?populate=*`),
    select: (res) => {      
      return res.data.data
    }
  });

  return state;
};
