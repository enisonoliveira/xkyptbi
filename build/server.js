"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var BookResolvers_1 = require("./resolvers/BookResolvers");
var server = new apollo_server_1.ApolloServer({
    typeDefs: BookResolvers_1.typeDefs,
    resolvers: BookResolvers_1.resolvers,
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server ready at " + url);
});
