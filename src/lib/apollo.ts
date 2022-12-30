import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://rocketseat-frontend-challenge.herokuapp.com/",
  fetch,
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: from([httpLink]),
  cache,
});
