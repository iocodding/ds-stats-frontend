import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
export const useTanStackLoader = () => {
  console.log(7);
  return useQuery({
    queryKey: ["dog"],
    queryFn: () =>
      axios.call("get", "http://localhost:1337/api/features/2?populate=*"),
    select: (response) => response.data,
  });
};
