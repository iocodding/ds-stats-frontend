import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useFeatureSectionComponentsLoader = (sectionId = 1) => {
  const config = useRuntimeConfig();

  const state = useQuery({
    queryKey: ["components"],
    queryFn: () =>
      axios.call("get", `${config.public.API_BASE_URL}/api/feature-section-components?populate=deep&filters[feature_section][id][$eq]=${sectionId}`),
      select: (res) => {      
        return res.data.data
     }
  });

  return state;
};
