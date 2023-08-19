import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useFeatureTanLoader = () => {
  const state = useQuery({
    queryKey: ["features"],
    queryFn: () =>
      axios.call("get", "http://localhost:1337/api/features?populate=*"),
      select: (res) => {      
        return res.data.data
      }
  });

  return state;
};
