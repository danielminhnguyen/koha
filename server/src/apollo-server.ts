import { ApolloServer } from "apollo-server-lambda";
import { resolvers } from "./resolvers";
import { typeDefs } from "./type-defs";
import { getConnection } from "../database";

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
  context: async () => {
    const dbConn = await getConnection();
    return { dbConn };
  },
  playground: true,
  introspection: true,
});

export const graphqlHandler = apolloServer.createHandler();
