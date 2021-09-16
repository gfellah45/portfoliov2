import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://blooming-gorge-90056.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
