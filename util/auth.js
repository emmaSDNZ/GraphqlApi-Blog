const jwt = require('jsonwebtoken')

const jwtn = (user)=>{
    return jwt.sign({user}, process.env.SECRET,
        {
            expiresIn: "1d" 
        }) 
}

module.exports= {
 jwtn,   
}
