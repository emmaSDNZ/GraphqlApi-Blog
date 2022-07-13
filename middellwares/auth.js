const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1]
    try {
        const verify = jwt.verify(token, process.env.SECRET)
        console.log(verify)
        req.verifyUser = verify.user
        next()   
    } catch (error) {
        console.log(error)
        next()
    }
   
}   

module.exports ={
    authenticate    
}

