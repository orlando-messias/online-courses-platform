import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pohjq51zo101xn3bsx8epk/master',
  cache: new InMemoryCache()
});