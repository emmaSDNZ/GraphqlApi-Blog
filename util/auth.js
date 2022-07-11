const jwt = require('jsonwebtoken')

const jwtn = (user)=>{
    return jwt.sign({user}, "userName",
        {
            expiresIn: "1d" 
        }) 
}

module.exports= {
 jwtn,   
}
