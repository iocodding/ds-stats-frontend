import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useFeatureSectionComponentsLoader = (sectionId = 1) => {
  const state = useQuery({
    queryKey: ["components"],
    queryFn: () =>
      axios.call("get", `http://localhost:1337/api/feature-section-components?populate=deep&filters[feature_section][id][$eq]=${sectionId}`),
      select: (res) => {      
        return res.data.data
     }
  });

  return state;
};
