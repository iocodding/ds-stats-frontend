import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useFeatureTanLoader = () => {
  const state = useQuery({
    queryKey: ["feature"],
    queryFn: () =>
      axios.call("get", "http://localhost:1337/api/features/2?populate=*"),
    select: (response) => {
      const feature = response.data.data.attributes;

      feature.feature_entities = feature.feature_entities.data.map((entry) => {
        return {
          ...entry.attributes,
          id: entry.id,
        };
      });

      return feature;
    },
  });

  return state;
};
