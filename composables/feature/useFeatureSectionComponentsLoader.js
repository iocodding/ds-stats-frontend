import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useFeatureSectionComponentsLoader = (sectionId = 1) => {
  const state = useQuery({
    queryKey: ["components"],
    queryFn: () =>
      axios.call("get", `https://dssspecs-backend-ibiz5.ondigitalocean.app/api/feature-section-components?populate=deep&filters[feature_section][id][$eq]=${sectionId}`),
      select: (res) => {      
        return res.data.data
     }
  });

  return state;
};
