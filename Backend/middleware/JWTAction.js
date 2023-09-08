const jwt = require('jsonwebtoken')
require('dotenv').config();

const createToken = (username,password) => {
    let token = null;
    try{
        token = jwt.sign(
            {
                username: username,
                password: password
            },
            process.env.SECRET_KEY
        )
    }catch(err){
        console.log(err)
    }
    

    return token
}

const verifyToken = (token) => {

    return jwt.verify(token,process.env.SECRET_KEY,(err, decodeToken) =>{
        if(err){
            // console.log('Token không hợp lệ')
            return null
        }else{
            // console.log('Token hợp lẹ')
            return decodeToken
        }
    } )
    
}

module.exports = {
    createToken,
    verifyToken
} 