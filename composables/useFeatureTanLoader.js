import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useFeatureTanLoader = () => {
  const state = useQuery({
    queryKey: ["feature"],
    queryFn: () =>
      axios.call("get", "http://localhost:1337/api/features/2?populate=*"),
    select: (response) => {
      console.log({ response })
      const feature = { ...response };

      feature.data.data.attributes.feature_entities = feature.data.data.attributes.feature_entities.data.map((entry) => {
        return {
          ...entry.attributes,
          id: entry.id,
        };
      });

      return feature
    },
  });

  return state;
};
