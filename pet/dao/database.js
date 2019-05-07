const mongoose = require('mongoose');
<<<<<<< HEAD
const dbURI = 'mongodb://localhost/lovePet';  // 其中 lovePet为连接的数据库名称,改成需要使用的 
=======
const dbURI = 'mongodb://localhost/lovePet';  // 其中 test 为连接的数据库名称,改成需要使用的 
>>>>>>> 84a0d0d451941efd47dbe50f88809fdad85862d6
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {  
    console.log('Mongoose connected to ' + dbURI);
});
