import { ApolloClient, InMemoryCache } from '@apollo/client'

import { env } from '@/env'

export const apolloClient = new ApolloClient({
  uri: env.HYGRAPH_API,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy:
        env.NODE_ENV !== 'production' ? 'no-cache' : 'cache-and-network',
    },
    query: {
      fetchPolicy: env.NODE_ENV !== 'production' ? 'no-cache' : 'network-only',
    },
  },
})
