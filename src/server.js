require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";

const PORT = process.env.PORT || 4000;

const typeDefs = `
    type Query {
        hello(name:String): String!
    }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `hello ${name || "World"}`
  }
};

console.log(`${PORT}`);

const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: PORT }, console.log(`http://localhost:${PORT} 열림`));
