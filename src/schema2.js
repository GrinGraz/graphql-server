const _ = require('lodash')

const Talks = require('./talks'); // This is to make available authors.json file
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

const Talk = new GraphQLObjectType({
    name: "Talk",
    description: "Repesentation of talk",
    fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLString)},
      title: {type: new GraphQLNonNull(GraphQLString)},
      speaker: {type: new GraphQLNonNull(GraphQLString)},
      description: {type: new GraphQLNonNull(GraphQLString)},
      room: {type: new GraphQLNonNull(GraphQLString)},
      time: {type: new GraphQLNonNull(GraphQLString)},
      track: {type: new GraphQLNonNull(GraphQLString)},
      avatar: {type: GraphQLString},
      favorite: {type: GraphQLString}
    })
  });


const TalkQueryRootType = new GraphQLObjectType({
  name: "DroidFestTalksSchema",
  description: "Droid fest talks schema",
  fields: () => ({
    talks: {
      type: new GraphQLList(Talk),
      description: "List of DroidFest Talks",
      resolve: function() {
        return Talks
      }
    }
  })
});

const TalksApiSchema = new GraphQLSchema({
  query: TalkQueryRootType
});

module.exports = TalksApiSchema;