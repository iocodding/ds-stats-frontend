import { useFetch } from '@vueuse/core'

export const useFeaturesLoader = () => {


    const state = useFetch('https://dssspecs-backend-ibiz5.ondigitalocean.app/api/features/2?populate=*')

    function normalize(data, optimistic) {
        if (data) {
          const feature = JSON.parse(data).data;
          if(optimistic.length) {
            return optimistic
          }
          else {
            feature.feature_entities = feature.feature_entities.map((entry) => {
              return { 
                ...entry,
              id: entry.id
          }
        });
          }
         
      

          return feature
        }
        return {}
    }
    
    return {...state, normalize};
}
