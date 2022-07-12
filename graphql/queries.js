const {GraphQLList, GraphQLID, GraphQLString} =  require('graphql')
const { UserType } = require('./type')
const User = require('../models/User.js')

const users = {
    type: new GraphQLList(UserType),
    description: "Returns list of users",
    resolve: async()=>{ 
      return await User.find()
    }
  }

const user = {
    type: UserType,
    description: "Get a user by id",
    args: {
      id: { type: GraphQLID}
    },
    resolve: async(_, args)=>{ 
      return await User.findById(args.id)
    }
  }

module.exports = { 
  users,
  user }