const express = require('express')
const route = express.Router()
const controller = require('../controllers/controllerAccount.js')
const multer = require('multer')


route.post('/', (req, res) => {
    controller.handleRatings(req, res)
})

route.get('/info', (req, res) => {
    controller.handleGetAccountInfomation(req, res)
})

route.put('/update', (req, res) => {
    controller.handleUpdateInfo(req, res)
})


// Địa nghĩa nơi lưu trữ ảnh
const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
  
      callback(null, './public/uploads/')
    },
    filename: (req, file, callback) => {
        // Tạo tên tệp mới bằng thời gian hiện tại và phần mở rộng của tệp gốc
        const extension = file.originalname;
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = `${uniqueSuffix}${extension}`;
        callback(null, filename)
    }
  })


const upload = multer({storage: storage})  

route.post('/update/image',upload.fields([{name:'avatar', maxCount: 1}, {name:'background', maxCount: 1}]), (req, res) => {
    controller.handleUpdateInfoImage(req, res)
})

route.get('/userReview', (req, res) => {
    controller.getInfoUserReview(req, res)
})
module.exports = route;