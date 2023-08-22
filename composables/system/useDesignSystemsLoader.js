import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useDesignSystemsLoader = () => {
  const state = useQuery({
    queryKey: ["design-systems"],
    queryFn: () =>
      axios.call("get", `http://localhost:1337/api/design-systems?populate=*&filters[is_public][$eq]=true`),
    select: (res) => {      
      return res.data.data
    }
  });

  return state;
};
