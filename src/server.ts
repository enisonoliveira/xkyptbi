import { ApolloServer } from "apollo-server";

import { resolvers, typeDefs } from './controllers/BookController';
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});