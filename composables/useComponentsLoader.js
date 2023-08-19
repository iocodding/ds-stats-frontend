import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useComponentsLoader = () => {
  const state = useQuery({
    queryKey: ["components"],
    queryFn: () =>
      axios.call("get", "http://localhost:1337/api/components"),
      select: (res) => {      
        return res.data.data
     }
  });

  return state;
};
