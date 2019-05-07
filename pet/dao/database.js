//
const mongoose = require('mongoose');
<<<<<<< HEAD
const dbURI = 'mongodb://localhost/lovePet';  // 其中 test 为连接的数据库名称,改成需要使用的 
=======
const dbURI = 'mongodb://localhost/lovePet';  // 其中 lovePet为连接的数据库名称,改成需要使用的 
>>>>>>> 594d21431a63e3eb1b38ebe8642d9b7ccd29db28
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {  
    console.log('Mongoose connected to ' + dbURI);
});
//