const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

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
        authorId: {type: GraphQLID},
    }
})


module.exports ={
    UserType,
    PostType,
}