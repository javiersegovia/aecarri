import { QueryClient } from 'react-query'
import { API_ENDPOINT } from './constants'

type DefaultQueryFnProps = {
  queryKey: [string, any]
}

export const defaultQueryFn = async ({ queryKey }: DefaultQueryFnProps) => {
  return fetch(`${API_ENDPOINT}${queryKey[0]}`).then((data) => data.json())
}

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
        cacheTime: 1000 * 60 * 5, // Time that the inactive queries data remains in the cache
        staleTime: 1000 * 60 * 2, // Time that the active queries remains as "valid",
      },
    },
  })
}
