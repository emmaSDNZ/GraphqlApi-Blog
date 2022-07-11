const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql')
const {hello} = require('./queries')
const {register} = require('./mutation')

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The root query type",
    fields:{
      hello: hello 
    }
})

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The root mutation type",
  fields: {
    register: register,
  },
})

module.exports =  new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
})

// npm install -d nodemon --legacy-peer-deps