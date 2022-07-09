require('dotenv').config()

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {connectDb}=require('./db/index.js')

const schema= require('./graphql/schema')
const app= express();
connectDb()

app.get('/', (req,res)=>{
    res.send("graphql")
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))    

app.listen(3000)
console.log("server on port 3000")