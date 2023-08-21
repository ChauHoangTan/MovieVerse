const controller = {};
const {createToken, verifyToken}  = require('../middleware/JWTAction') 
const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const dbName = 'MovieVerse';
controller.handleLogin = async (req, res) => {


    try{
        const client = await MongoClient.connect(url)
        console.log('Kết nối thành công tới MongoDB');

        const db = client.db(dbName)
        const accountList = await db.collection('user').find().toArray()
        console.log(accountList)

        const accountLogin = req.body   
        for (let i = 0; i < accountList.length; i++){
            if(accountList[i].username === accountLogin.username && accountList[i].password === accountLogin.password){
                let token = createToken(accountLogin.username, accountLogin.password)
                console.log(token) 
                console.log(accountLogin)

                verifyToken(token)
                res.json(token)
            }
        }
    }catch(err){
        console.log(err)
    }

    


    
}

module.exports = controller;