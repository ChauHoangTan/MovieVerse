const controller = {}
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'MovieVerse';
const {verifyToken}  = require('../middleware/JWTAction') 
const axios = require('axios');
const multer = require('multer')
const { get } = require('../routes/routeLogin');
const APIkey = 'a50a061b1989216e2c7931d35fc20896';

controller.handleRatings = async (req, res) => {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);

        const user = verifyToken(req.body.token)
        // lấy danh sách id các phim đã rating
        const resultFilmRatings = (await db.collection(req.body.field).find({usermame: user.usermame}).toArray()).reverse()

        // lấy thông tin các phim đó từ tmdb api
        let resultDataRatings = []
        const getListDataFilmRatings = async () => {
            
            const getDataFilmFromAPI = async (id, type) => {
                try{
                    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${APIkey}&language=en-US`)
                    response.data.type = type
                    return response.data
                }catch(err){
                    console.log(err)
                }
            }
                
            const promises = resultFilmRatings.map((film) => {
                return getDataFilmFromAPI(film.id_film, film.type)
            })
            resultDataRatings = await Promise.all(promises);
            res.send(resultDataRatings)
        }

        await getListDataFilmRatings()
        
        
    }catch(err){
        console.log(err)
    }
}

controller.handleGetAccountInfomation = async (req, res) => {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);

        const token = req.header('Authorization').replace('Bearer ', '');
        const account = verifyToken(token)
        const query = {
            username: account.username
        }
        let info = (await db.collection('user').findOne(query))
        res.send(info)
        
    }catch(err){
        console.log(err)
    }
}

controller.handleUpdateInfo = async(req, res) => {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);

        const token = req.body.token
        const account = verifyToken(token)
        const filter = {
            username: account.username,
            password: account.password
        }
        const update = {$set: req.body.data}
      
        await db.collection('user').updateOne(filter,update)
        console.log(update)
    }catch(err){
        console.log(err)
    }
}
 

controller.handleUpdateInfoImage = async(req, res) => {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);

        const token = req.body.token
        const account = verifyToken(token)

        const filter = {
            username: account.username
        }
        let update ;
     
        if(req.body.type === 'avatar'){
            update= {
                $set: {
                   avatar: req.files.avatar[0].filename
                }
            }
        }else{
            update= {
                $set: {
                   background: req.files.background[0].filename
                }
            } 
        }
        await db.collection('user').updateOne(filter,update)
    }catch(err){
        console.log(err)
    }
}

controller.getInfoUserReview = async (req, res) => {
    try{
        const client = await MongoClient.connect(url)
        const db = client.db(dbName);

        const query = {
            username: req.query.username
        }
        let info = (await db.collection('user').findOne(query))
        console.log(req.body)
        res.send(info)

    }catch(err){
        console.log(err)
    }
}
module.exports = controller;