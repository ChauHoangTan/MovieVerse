const controller = {}
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'MovieVerse';
const {verifyToken}  = require('../middleware/JWTAction') 
const axios = require('axios');
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
            
            const getDataFilmFromAPI = async (id) => {
                try{
                    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US`)
                    return response.data
                }catch(err){
                    console.log(err)
                }
            }
                
            const promises = resultFilmRatings.map((film) => {
                return getDataFilmFromAPI(film.id_film)
            })
            resultDataRatings = await Promise.all(promises);
            res.send(resultDataRatings)
        }

        await getListDataFilmRatings()
        
        
    }catch(err){
        console.log(err)
    }
}

module.exports = controller;