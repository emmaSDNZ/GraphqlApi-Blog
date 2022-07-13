const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql')
const {users, user, posts, post} = require('./queries')
const {register, login, createPost,updatePost} = require('./mutation')

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The root query type",
    fields:{
      users: users,
      user: user,
      posts,
      post
    }
})

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The root mutation type",
  fields: {
    register: register,
    login: login,
    createPost,
    updatePost
  },
})


module.exports =  new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
})

// npm install -d nodemon --legacy-peer-deps