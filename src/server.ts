import { ApolloServer } from "apollo-server";

import { resolvers, typeDefs } from './resolvers/BookResolvers';
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});