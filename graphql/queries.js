const {GraphQLList, GraphQLID, GraphQLString} =  require('graphql')
const { UserType, PostType } = require('./type')
const {User, Post} = require('../models/index')

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

const posts = {
  type: new GraphQLList(PostType),
  description: "get all posts",
  resolve: async()=> await Post.find()
}

const post = {
  type: PostType,
  description: "get a post By Id",
  args: {
    id: { type: GraphQLID}
  },
  resolve: async(_, args)=> {
    const post = await Post.findById(args.id)
    console.log("esto es post",post)
    return post
  }
}

module.exports = { 
  users,
  user,
  posts, 
  post 
}