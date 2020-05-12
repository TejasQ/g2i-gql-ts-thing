import { ApolloServer, MockList } from "apollo-server";
import { readFileSync } from "fs";
import { title } from "casual";

new ApolloServer({
  mocks: {
    todo: () => ({
      id: title,
    }),
    query_root: () => ({
      todos: () => new MockList([5, 500]),
    }),
  },
  typeDefs: readFileSync("./schema.graphql", "utf8"),
}).listen(3001);
