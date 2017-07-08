const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    name: { type: GraphQLString }
  }
});

module.exports = RootQueryType;
