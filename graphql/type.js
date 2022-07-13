const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const {User} = require("../models/index.js")

const UserType = new GraphQLObjectType({
    name: "UserType",
    description: "the type of user",
    fields:{
        id: {type: GraphQLID},
        userName: {type: GraphQLString},
        email: {type: GraphQLString},
        displayName: {type: GraphQLString},
    }
})

const PostType= new GraphQLObjectType({
    name: "PostType",
    description: "the post type",
    fields: {
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        body: {type: GraphQLString},
        author: {type: UserType, resolve(parent){
            return User.findById(parent.authorId)
        } }
    }
})


module.exports ={
    UserType,
    PostType,
}