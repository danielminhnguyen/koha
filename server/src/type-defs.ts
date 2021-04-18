import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    getClubsInfo: [Club]
  }

  type Club {
    _id: ID!
    name: String!
    Amount: Int
  }

  type Query {
    """
    A test message.
    """
    testMessage: String!
  }
`;
