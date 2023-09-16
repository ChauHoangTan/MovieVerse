const express = require('express');
const app = express();
const port = 4000;


const bodyParser = require('body-parser');


app.use((req, res, next) => {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000, https://chauhoangtan.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


// kết nối với mongoDB
// const {fetchConnect} = require('./database/connect_database.js')
// fetchConnect()

// For parsing application/json
app.use(express.json());
// Sử dụng body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // Xử lý dữ liệu form-urlencoded



// Cung cấp quyền truy cập thư mục lưu trữ ảnh uploads
app.use('/update/image', express.static('./public/uploads/'))

// Route sử lý

app.use('/login', require('./routes/routeLogin.js'))
app.use('/register', require('./routes/routeRegister.js'))
app.use('/:type', (req, res, next) => {
  req.type = req.params.type
  next()
}, require('./routes/routeFilm.js')) 
app.use('/account', require('./routes/routeAccount.js'))

app.get('/', (req, res) => {
  res.send('Chào mừng đến với trang chủ!');
});

app.listen(port, () => {
    console.log('Server is starting....')
})

