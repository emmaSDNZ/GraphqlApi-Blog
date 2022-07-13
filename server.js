require('dotenv').config()

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {connectDb}=require('./db/index.js')
const {authenticate} = require('./middellwares/auth.js')


const schema= require('./graphql/schema')
const app= express();
connectDb()

app.use(authenticate)

app.get('/', (req,res)=>{
    res.send("graphql")
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))    

const PORT = 3000
app.listen(PORT)
console.log("server on port "+ PORT)