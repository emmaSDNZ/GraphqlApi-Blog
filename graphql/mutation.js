const {GraphQLString} =  require('graphql')
const {User} = require('../models/index.js')
const {jwtn} = require('../util/auth.js')

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

module.exports= {register}