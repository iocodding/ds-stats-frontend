
import { useQueryClient } from "@tanstack/vue-query";
import axios from "axios";

export function useFeatureActions() {
    const api = useAxios()
    const queryClient = useQueryClient()
    const config = useRuntimeConfig();

    return {
        createFeatureEntity(entity = {}) {
            const promise = api.post('/feature-entities', entity)

            return promise
        },
        deleteFeature(component) {
            const promise = axios.delete(`${config.public.API_BASE_URL}/api/features/${component.id}`).then(() => {
              queryClient.invalidateQueries({ queryKey: ['features'] })
            })
            return promise;
          },
        updateFeatureEntity(entity = {}) {
            const promise = api.put(`/feature-entities/${entity.id}`, { data: entity })

            return promise
        },
        reorderFeatureEntity(moveId, moveBeforeId) {
            const promise = api.put(`features/2`,
            { data: {
                "id": 2,
                "feature_entities": {
                    "connect": [
                        {
                            "id": moveId,
                            "position": {
                                "before": moveBeforeId
                            }
                        }
                    ]
                },
               
            }});

            return promise
        }
    }
}