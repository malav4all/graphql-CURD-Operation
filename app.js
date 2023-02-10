const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const file = require("dotenv");
const resolvers = require("./graphql/resolvers");
const connection = require("./db/connect");
file.config();
async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app, path: "/graphql" });
  connection;

  app.listen(4000, () => {
    console.log("server is running...");
  });
}
startServer();
