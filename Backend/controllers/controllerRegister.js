const controller = {}

const {MongoClient} = require('mongodb');
const url = process.env.MONGO_DB_URL;
const dbName = 'MovieVerse';

controller.handleRegister = (req, res) => {
    const newAccount = req.body;

    const fetchConnect = async () =>{
        try {
            const client = await MongoClient.connect(url);
            console.log('Kết nối thành công tới MongoDB');
            
            const db = client.db(dbName);
    
            // Thực hiện các hoạt động với database ở đây
            // Kiểm tra tên tài khoản
            let query = {
                username: newAccount.username
            }
            
            const result = await db.collection('user').find(query).toArray(function(err,result){
                if(err) throw err;
                console.log(result)
            })

            // nếu như không thấy trùng tên tài khoản thì thêm tài khoản vào db
        
            if(result.length === 0){
                await db.collection('user').insertOne(newAccount)
                const resObj = {
                    status: true,
                    title:'Sucess register account!'
                }
                res.send(resObj)
            }else{
                const resObj = {
                    status: false,
                    title:'Username has already existed!'
                }
                res.send(resObj)
            }
            
            console.log(result)


            client.close();
        } catch (err) {
            console.log('Lỗi kết nối tới MongoDB:', err);
        }
    
    }
    fetchConnect()

};


module.exports = controller;