import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useDesignSystemLoader = ({ id }) => {
  const state = useQuery({
    queryKey: ["design-system"],
    queryFn: () =>
      axios.call("get", `https://dssspecs-backend-ibiz5.ondigitalocean.app/api/design-systems/${id}?populate=*`),
    select: (res) => {      
      return res.data.data
    }
  });

  return state;
};
