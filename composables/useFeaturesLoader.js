import { useFetch } from '@vueuse/core'

export const useFeaturesLoader = () => {


    const state = useFetch('http://localhost:1337/api/features/2?populate=*')

    function normalize(data, optimistic) {
        if (data) {
          const feature = JSON.parse(data).data.attributes;
          console.log(optimistic)
          if(optimistic.length) {
            return optimistic
          }
          else {
            feature.feature_entities = feature.feature_entities.data.map((entry) => {
              return { 
                ...entry.attributes,
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
