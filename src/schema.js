const _ = require('lodash')

// const Authors = require('./data/authors'); // This is to make available authors.json file
// const Posts = require('./data/posts'); // This is to make available post.json file

/* Here a simple schema is constructed without using the GraphQL query language. 
  e.g. using 'new GraphQLObjectType' to create an object type 
*/
let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema,
} = require('graphql');

const DevType = new GraphQLObjectType({
  name: "Developer",
  description: "Repesentation of devloper",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    specialty: {type: new GraphQLNonNull(GraphQLString)},
    vertical: {type: new GraphQLNonNull(GraphQLString)},
    avatar: {type: GraphQLString},
    techLangPlat: {type: new GraphQLNonNull(GraphQLString)},
    techLangPlatLogo: {type: GraphQLString}
  })
});

const DevQueryRootType = new GraphQLObjectType({
  name: "YapoDevsApiSchema",
  description: "Yapo Developers API Schema Query Root",
  fields: () => ({
    devs: {
      type: new GraphQLList(DevType),
      description: "List of Yapo Develpers",
      resolve: function() {
        return Developers
      }
    }
  })
});

const DevApiSchema = new GraphQLSchema({
  query: DevQueryRootType
});

module.exports = DevApiSchema;