const {GraphQLString} =  require('graphql')

const hello = {
    type: GraphQLString,
    description: "Returns a string",
    resolve: ()=> "hello world"
  }  

module.exports = { hello }