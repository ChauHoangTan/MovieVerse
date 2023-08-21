const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'MovieVerse';

const fetchConnect = async () =>{
    try {
        const client = await MongoClient.connect(url);
        console.log('Kết nối thành công tới MongoDB');
        
        const db = client.db(dbName);

        // Thực hiện các hoạt động với database ở đây

        client.close();
    } catch (err) {
        console.log('Lỗi kết nối tới MongoDB:', err);
    }

}

module.exports = {
    fetchConnect
}

