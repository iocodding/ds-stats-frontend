import { createFetch } from '@vueuse/core'

const useLoader = createFetch({
    baseUrl: 'http://localhost:1337/api',
    fetchOptions: {
      mode: 'cors',
    },
  })

  export default useLoader