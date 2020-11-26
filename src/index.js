const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Shoot {
    id: ID,
    name: String,
    client: String,
    subject: String,
    shoot_date: Date,
    shoot_loc: String,
    storage_loc: String,
    tags: [int]
  }

  type Tags {
    id: ID,
    tags: String,
    photo_ids:[int]
  }
`;


// const shoots = [
//   {
//
//   },
//   {
//
//   },
// ];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    shoots: () => shoots,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
