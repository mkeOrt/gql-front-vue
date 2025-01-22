import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

export function getApolloClient() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
  })

  const cache = new InMemoryCache()

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  })

  return apolloClient
}
