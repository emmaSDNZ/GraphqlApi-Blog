const {GraphQLString,GraphQLID} =  require('graphql')
const {User, Post} = require('../models/index.js')
const {jwtn} = require('../util/auth.js');
const { PostType } = require('./type.js');

const register = {
    type: GraphQLString,
    description: "register a new user and returna a token",
    args:{
        userName: {type: GraphQLString },
        email: {type: GraphQLString },
        password: {type: GraphQLString }, 
        displayName: {type: GraphQLString }
    },
    resolve: async(_,args)=>{
        const {userName, email, password, displayName}= args;

        try{
        const newUser  = new User({userName, email, password, displayName})
        await newUser.save()
        
        const token = jwtn({
            _id: newUser._id, 
            userName: newUser.userName, 
            email: newUser.email})

    return token

        }catch(error){
        return console.log(error)
        }
    }
}

const login = {
    type: GraphQLString,
    description: "login user and returns a token",
    args:{
        email: {type: GraphQLString },
        password: {type: GraphQLString }, 
    },
    resolve: async(_ , args)=>{

        const user = await User.findOne({email: args.email})
        if(!user || args.password !== user.password ) 
        throw new Error ("Invalid Credentials")
        
        const token = jwtn({
            _id: user._id, 
            userName: user.userName, 
            email: user.email
        })
        return token;
    }
}

const createPost = {
    type: PostType,
    description: 'Create a new post',
    args:{
        title:  {type: GraphQLString},
        body: {type: GraphQLString}
    },
    resolve: async(_, args, {verifyUser})=>{
        const newPost = new Post({
            title: args.title, 
            body: args.body,
            authorId: verifyUser._id
        })
       await newPost.save()
       return newPost
    }
}

const updatePost = {
    type: PostType,
    description: "update a post",
    args: {
        id: {type: GraphQLID },
        title: {type: GraphQLString},
        body: {type: GraphQLString}
    },
    resolve: async(_, {id, title, body}, {verifyUser})=>{
      if(!verifyUser) throw new Error("Unauthorized")

      const updatePost = await Post.findOneAndUpdate({
        _id: id,
        authorId: verifyUser._id
      },{
        title, body
      },{
        new: true,
      })
        return updatePost
    } 
}

module.exports= {
    register,
    login,
    createPost,
    updatePost
    
}