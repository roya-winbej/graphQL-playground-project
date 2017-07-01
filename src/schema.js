const graphql = require('graphql');

const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLInt;
const GraphQLSchema = graphql.GraphQLSchema;


const users = {
  '1': {
    id: '1',
    firstName: 'Gregory',
    age: 49,
  },
  '2': {
    id: '2',
    firstName: 'Sam',
    age: 20,
  },
};

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: (parentValues, args) => {
        return users[args.id];
      }
    },
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;