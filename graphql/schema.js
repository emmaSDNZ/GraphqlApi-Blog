const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql')
const {hello} = require('./queries')
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The root query type",
    fields:{
      hello: hello 
    }
})

const schema =  new GraphQLSchema({
    query: QueryType
})

module.exports = schema

// npm install -d nodemon --legacy-peer-deps