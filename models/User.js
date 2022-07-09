const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    userName:{
        type: String,
        require: true
    },
    password:{ 
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    displayName:{
        type: String,
        require: true
    }},
    {
        timestamps: true,
        versionKey: false
    })

model.exports = model('User', userSchema )