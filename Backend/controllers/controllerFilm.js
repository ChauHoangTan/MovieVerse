const controller = {};
const {createToken, verifyToken}  = require('../middleware/JWTAction') 
const {MongoClient} = require('mongodb')
const url = process.env.MONGO_DB_URL;
const dbName = 'MovieVerse';
controller.handleView = async (req, res, type) => {
    try{
        const client = await MongoClient.connect(url)

        const db = client.db(dbName)

        // lấy id film từ params
        const id_film = parseInt(req.params.id)
        

        // nếu dữ liệu đầu vào là một token thì gửi thông tin các checkbox đến cho client
        // không thì xử lý dữ liệu cho chọn và hủy chọn các checkbox
        if(req.body.token){
            const accountInfo = verifyToken(req.body.token)
            // nếu là hành động lấy dữ liệu lần đầu truy cập trang
            if(req.body.first_request === true){

                const playList = await db.collection('play_list').find({
                    id_film: id_film, 
                    type: type,
                    username: accountInfo.username
                }).toArray()
                const favorite = await db.collection('favorite').find({
                    id_film: id_film, 
                    type: type,
                    username: accountInfo.username
                }).toArray()
                const bookmark = await db.collection('bookmark').find({
                    id_film: id_film, 
                    type: type,
                    username: accountInfo.username
                }).toArray()
                const rating = await db.collection('rating').find({
                    id_film: id_film, 
                    type: type,
                    username: accountInfo.username
                }).toArray()
    
                const handleSendInfo = (array) => {
                    if(array.length === 0){
                        return false;
                    }
                    return true
                }


                let rate = 0;
                if(rating.length > 0){
                    rate = rating[0].rate
                }
                let sendObj = {
                    playList: handleSendInfo(playList),
                    favorite: handleSendInfo(favorite),
                    bookmark: handleSendInfo(bookmark),
                    rating: rate
                }
                res.send(sendObj)
            }else{
                // thực hiện các hành động update dữ liệu
                if(req.body.play_list === true){
                    await db.collection('play_list').insertOne({
                        id_film: id_film,
                        type: type,
                        username: accountInfo.username
                    })
                }else if(req.body.play_list === false){
                    await db.collection('play_list').deleteOne({
                        id_film: id_film,
                        type: type,
                        username: accountInfo.username
                    })
                }else if(req.body.favorite === true){
                    await db.collection('favorite').insertOne({
                        id_film: id_film,
                        type: type,
                        username: accountInfo.username
                    })
                }else if(req.body.favorite === false){
                    await db.collection('favorite').deleteOne({
                        id_film: id_film,
                        type: type,
                        username: accountInfo.username
                    })
                }else if(req.body.bookmark === true){
                    await db.collection('bookmark').insertOne({
                        id_film: id_film,
                        type: type,
                        username: accountInfo.username
                    })
                }else if(req.body.bookmark === false){
                    await db.collection('bookmark').deleteOne({
                        id_film: id_film,
                        type: type,
                        username: accountInfo.username
                    })
                }else if(req.body.rating === true){
                    const filter = {
                        id_film: id_film,
                        type: type,
                        username: accountInfo.username
                    }
                    const data = {
                        $set:{
                            rate: req.body.rate
                        }
                        
                    }
                    const option = {
                        upsert:true
                    }
                    await db.collection('rating').updateOne(filter,data,option)
                }else{
                    await db.collection('rating').deleteOne({
                        id_film: id_film,
                        type: type,
                        username: accountInfo.username
                    })
                }
            }
            

       
        
        }else{
            let sendObj = {
                playList: false,
                favorite: false,
                bookmark: false,
                rating: false
            }
            res.send(sendObj)
        }

        res.send('true')
    }catch(err){
        console.log(err)
    }

    
}


controller.showReviews = async (req, res, type) => {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);

        const id_film = req.params.id;
        
        let query = {
            id: id_film,
            type: type,
        }
        let listReview = await db.collection('review').find(query).toArray();
        listReview = listReview.reverse();
        res.send(listReview)
    }catch(err){
        console.log(err)
    }
}

controller.handleAddReview = async (req, res) => {
    const newReview = req.body.newReview;
    console.log(newReview)
   
    try{
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);

        await db.collection('review').insertOne(newReview)
    }catch(err){
        console.log(err)
    }
}

module.exports = controller;