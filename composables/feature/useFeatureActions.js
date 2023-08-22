export function useFeatureActions() {
    const api = useAxios()
    return {
        createFeatureEntity(entity = {}) {
            const promise = api.post('/feature-entities', entity)

            return promise
        },
        deleteFeatureEntity(entity = {}) {
            const promise = api.delete(`/feature-entities/${entity.id}`)

            return promise
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